#!/usr/bin/env python3
"""Refresh commercial-outcome + dynamic product bindings in the automotive Twilight bundle.

Smart Vehicle Finder merchant options live in `scripts/rebuild-svf-options.py`
(single `svf_vehicles` table). This script only refreshes nested product bindings
for that table, and commerce fields for the other components.

Use `{prefix}product_brands` (not `{prefix}brands`) for Salla brand pickers when a
component already has a vehicle/brand concept.
"""

from __future__ import annotations

import json
from pathlib import Path
from uuid import NAMESPACE_URL, uuid5

ROOT = Path(__file__).resolve().parents[1]
BUNDLE = ROOT / "twilight-bundle.json"
PUBLIC = ROOT / "public" / "twilight-bundle.json"

LINK_SOURCES = [
    {"label": "منتج", "key": "products", "value": "products"},
    {"label": "تصنيف", "key": "categories", "value": "categories"},
    {"label": "ماركة تجارية", "key": "brands", "value": "brands"},
    {"label": "صفحة تعريفية", "key": "pages", "value": "pages"},
    {"label": "مقالة", "key": "blog_articles", "value": "blog_articles"},
    {"label": "تصنيف ضمن المدونة", "key": "blog_categories", "value": "blog_categories"},
    {"label": "التخفيضات", "key": "offers_link", "value": "offers_link"},
    {"label": "الماركات التجارية", "key": "brands_link", "value": "brands_link"},
    {"label": "المدونة", "key": "blog_link", "value": "blog_link"},
    {"label": "رابط خارجي", "key": "custom", "value": "custom"},
]

PREFIXES = {
    "car-sound-diagnostic-guide": "csdg_",
    "dashboard-warning-guide": "dwg_",
    "driving-conditions-guide": "dcg_",
    "garage-banners": "gba_",
    "installation-process-steps": "ips_",
    "interactive-car-parts-map": "icpm_",
    "mileage-maintenance-timeline": "mmt_",
    "part-compatibility-card": "pcc_",
    "part-journey-timeline": "pjt_",
    "parts-before-after": "pba_",
    "parts-categories": "pca_",
    "parts-comparison-table": "pct_",
    "parts-feature-spotlight": "pfs_",
    "smart-vehicle-finder": "svf_",
    "tire-battery-selection-guide": "tbsg_",
    "tire-size-finder": "tsf_",
    "vehicle-health-meter": "vhm_",
    "vehicle-needs-checker": "vnc_",
    "visual-vehicle-history": "vvh_",
    "warranty-authenticity-center": "wac_",
    "limited-time-offer": "lto_",
    "store-advantages": "sta_",
    "video-hero": "vh_",
    "whatsapp-contact-banner": "wcb_",
}

SVF_COLLECTIONS = ("svf_vehicles",)

SOURCE_OPTIONS = [
    {"key": "latest", "label": "أحدث المنتجات", "value": "latest"},
    {"key": "selected", "label": "منتجات مختارة", "value": "selected"},
]

ROW_SOURCE_OPTIONS = [
    {"key": "latest", "label": "أحدث المنتجات", "value": "latest"},
    {"key": "selected", "label": "منتجات مختارة", "value": "selected"},
]


def key(component: str, field_id: str) -> str:
    return str(uuid5(NAMESPACE_URL, f"automotive-commerce/{component}/{field_id}"))


def conditional(field: dict, condition: dict | None = None) -> dict:
    if condition:
        field["conditions"] = [condition]
    return field


def condition(field_id: str, value, collection_id: str | None = None) -> dict:
    """Salla editor condition. Nested collection fields need collection_id + value_index."""
    item = {"id": field_id, "value": value, "operation": "="}
    if collection_id:
        item["collection_id"] = collection_id
        item["value_index"] = "."
    return item


def brands_field_id(prefix: str) -> str:
    """Avoid colliding with SVF vehicle brands collection (`svf_brands`)."""
    return f"{prefix}product_brands"


def products_picker(component: str, field_id: str, conditions: dict | None = None) -> dict:
    return {
        "id": field_id,
        "key": key(component, field_id),
        "icon": "sicon-keyboard_arrow_down",
        "type": "items",
        "label": "المنتجات المختارة",
        "format": "dropdown-list",
        "source": "products",
        "options": [],
        "required": False,
        "selected": [],
        "maxLength": 24,
        "minLength": 0,
        "searchable": True,
        "description": "اختر المنتجات التي تظهر في هذا العنصر.",
        "multichoice": True,
        **({"conditions": [conditions]} if conditions else {}),
    }


def categories_picker(component: str, field_id: str, conditions: dict | None = None) -> dict:
    return {
        "id": field_id,
        "key": key(component, field_id),
        "icon": "sicon-keyboard_arrow_down",
        "type": "items",
        "label": "التصنيف",
        "format": "dropdown-list",
        "source": "categories",
        "options": [],
        "required": False,
        "selected": [],
        "searchable": True,
        "description": "عرض منتجات من تصنيف سلة.",
        **({"conditions": [conditions]} if conditions else {}),
    }


def brands_picker(component: str, field_id: str, conditions: dict | None = None) -> dict:
    return {
        "id": field_id,
        "key": key(component, field_id),
        "icon": "sicon-keyboard_arrow_down",
        "type": "items",
        "label": "الماركات التجارية",
        "format": "dropdown-list",
        "source": "brands",
        "options": [],
        "required": False,
        "selected": [],
        "searchable": True,
        "description": "عرض منتجات من الماركات التجارية.",
        **({"conditions": [conditions]} if conditions else {}),
    }


def source_dropdown(component: str, field_id: str, conditions: dict | None = None) -> dict:
    field = {
        "id": field_id,
        "key": key(component, field_id),
        "icon": "sicon-t-shirt",
        "type": "items",
        "label": "نوع مصدر المنتجات",
        "format": "dropdown-list",
        "source": "Manual",
        "options": list(SOURCE_OPTIONS),
        "required": False,
        "selected": [SOURCE_OPTIONS[0]],  # latest
        "multichoice": False,
    }
    if conditions:
        field["conditions"] = [conditions]
    return field


def collection_binding_fields(collection_id: str) -> list[dict]:
    return []


def commerce_fields(component: str, prefix: str) -> list[dict]:
    return [
        {
            "type": "static",
            "format": "title",
            "id": f"{prefix}commerce_heading",
            "key": key(component, f"{prefix}commerce_heading"),
            "value": "<h6 style='color:#9a3412;font-size:14px;font-weight:800;margin:22px 0 8px'>التحويل التجاري</h6>",
        },
        {
            "id": f"{prefix}show_cta",
            "key": key(component, f"{prefix}show_cta"),
            "type": "boolean",
            "format": "switch",
            "label": "عرض زر رابط بعد النتيجة",
            "description": "زر يوجّه العميل لرابط تختاره.",
            "icon": "sicon-toggle-off",
            "value": False,
            "selected": False,
            "required": False,
        },
        {
            "id": f"{prefix}result_link",
            "key": key(component, f"{prefix}result_link"),
            "type": "items",
            "icon": "sicon-link",
            "label": "رابط زر التسوق",
            "format": "variable-list",
            "source": "offers_link",
            "sources": LINK_SOURCES,
            "value": None,
            "required": False,
            "searchable": True,
            "conditions": [condition(f"{prefix}show_cta", True)],
        },
        {
            "id": f"{prefix}cta_label",
            "key": key(component, f"{prefix}cta_label"),
            "type": "string",
            "format": "text",
            "label": "نص زر التسوق",
            "icon": "sicon-format-text-alt",
            "value": {"ar": "تسوق الآن", "en": "Shop now"},
            "multilanguage": True,
            "required": False,
            "conditions": [condition(f"{prefix}show_cta", True)],
        },
    ]


def patch_svf_collections(component: dict) -> None:
    """Drop legacy product bindings from SVF collection rows."""
    binding_ids = {
        "products",
        "products_source",
        "chosen_products",
        "categories",
        "category",
        "brands",
        "product_brands",
    }
    for field in component.get("fields", []):
        fid = field.get("id")
        if fid not in SVF_COLLECTIONS:
            continue
        if field.get("format") != "collection" and field.get("type") != "collection":
            continue
        nested = field.get("fields") or []
        drop = set(binding_ids) | {f"{fid}.{x}" for x in binding_ids}
        field["fields"] = [f for f in nested if f.get("id") not in drop]
        rows = field.get("value")
        if isinstance(rows, list):
            cleaned = []
            for row in rows:
                if not isinstance(row, dict):
                    cleaned.append(row)
                    continue
                item = dict(row)
                for key_name in binding_ids:
                    item.pop(key_name, None)
                cleaned.append(item)
            field["value"] = cleaned


def commerce_ids_for(prefix: str) -> set[str]:
    return {
        f"{prefix}commerce_heading",
        f"{prefix}products",
        f"{prefix}show_products",
        f"{prefix}products_mode",
        f"{prefix}products_reveal",
        f"{prefix}products_source",
        f"{prefix}chosen_products",
        f"{prefix}categories",
        f"{prefix}brands",
        f"{prefix}product_brands",
        f"{prefix}products_limit",
        f"{prefix}products_title",
        f"{prefix}show_view_all",
        f"{prefix}view_all_label",
        f"{prefix}view_all_link",
        f"{prefix}slides_per_view",
        f"{prefix}show_product_options",
        f"{prefix}show_cta",
        f"{prefix}result_link",
        f"{prefix}cta_label",
        f"{prefix}advanced_products",
    }


def main() -> None:
    bundle = json.loads(BUNDLE.read_text())

    for component in bundle["components"]:
        name = component["name"]
        prefix = PREFIXES.get(name)
        if not prefix:
            continue

        # SVF merchant options are owned by rebuild-svf-options.py — only refresh bindings.
        if name == "smart-vehicle-finder":
            patch_svf_collections(component)
            continue

        ids = commerce_ids_for(prefix)
        component["fields"] = [
            field for field in component["fields"] if field.get("id") not in ids
        ]
        component["fields"].extend(commerce_fields(name, prefix))

    text = json.dumps(bundle, ensure_ascii=False, indent=2) + "\n"
    BUNDLE.write_text(text)
    PUBLIC.write_text(text)
    print("Updated twilight-bundle.json (+ public)")


if __name__ == "__main__":
    main()