let $BLOCKS = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries").BLOCK

function toTitleCase(string) {
    return string.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ')
}

function groupSameItems(event, namespace, groups) {
    for (let k in groups) {
        if (k.startsWith("#")) {
            let tag_key = k.substring(1)
            event.groupItemsByTag(namespace + ":rei_groups/tag_" + tag_key, groups[k], namespace + ":" + tag_key)
        } else {
            event.groupSameItem(namespace + ":rei_groups/" + k, groups[k], Item.of(namespace + ":" + k))
        }
    }
}

function groupAllTags(event, namespace, name_transformer) {
    let matching_tags = $BLOCKS.getTagNames()
        .map(key => key.location())
        .filter(key => key.getNamespace() == namespace)
        .toList()


    matching_tags.forEach(tag => {
        let tag_key = tag.path.toString()
        event.groupItemsByTag(namespace + ":rei_groups/tag_" + tag_key, name_transformer(tag_key), tag.toString())
    })
}

REIEvents.groupEntries(event => {
    groupSameItems(event, "minecraft", {
        "enchanted_book": "Enchanted Books",
        "potion": "Potions",
        "splash_potion": "Splash Potions",
        "lingering_potion": "Lingering Potions",
        "tipped_arrow": "Tipped Arrows",
        "suspicious_stew": "Suspicious Stew",

        "#wool": "Wool",
        "#wool_carpets": "Carpets",
        "#terracotta": "Terracotta",
        "#shulker_boxes": "Shulker Boxes",
        "#concrete_powder": "Concrete Powder",
        "#beds": "Beds",
        "#banners": "Banners",
        "#candles": "Candles",
        "#decorated_pot_sherds": "Pottery Sherds"
    })

    groupAllTags(event, "chipped", tag => toTitleCase(tag.replaceAll('_', ' ')))
})