// constants.ts

var placement = [
    { name: 'Cap Front' },
    { name: 'Cap Side' },
    { name: 'Cap Back' },
    { name: 'Low Profile Cap' },
    { name: 'Left Chest' },
    { name: 'Right Chest' },
    { name: 'Front Pocket' },
    { name: 'Full Front' },
    { name: 'Jacket Back' },
    { name: 'Cap/Chest' },
    { name: 'Knit Caps' },
    { name: 'Beanie Caps' },
    { name: 'Visor' },
    { name: 'Sleeve' },
    { name: 'Patches' },
    { name: 'Apron' },
    { name: 'Applique Design' },
    { name: 'Bags' },
    { name: 'Towel' },
    { name: 'Gloves' },
    { name: 'Blankets' },
    { name: 'Sweatshirt' },
    { name: 'Hoodie' },
    { name: 'Wrist Band' },
    { name: 'Seat Cover' },
    { name: 'Quilt' }
];


var formatOptions = [
    { name: "Tajima Machine File (.DST)"},
    { name: "Barudan Machine File (.DSB)"},
    { name: "Janome Machine File (.JEF)"},
    { name: "Compucon Machine File (.XXX)"},
    { name: "Happy Machine File (.TAP)"},
    { name: "Toyota Machine File (.100)"},
    { name: ".EMB/.DST"},
    { name: ".PES/.DST"},
    { name: ".EXP/.DST" },
    { name: ".CND/.DST"},
    { name: ".OFM/.DST"},
    { name: ".PXF/.DST"}
];



var designTypes = [
    { name: "Embroidered" },
    { name: "Sublimated" },
    { name: "Emb + Sublimated"},
    { name: "PVC / Silicon" },
    { name: "Leather"}
];


var backingOptions = [
    { name: "Iron on Patch"},
    { name: "Velcro Patch"},
    { name: "Plain sew on Patch"},
    { name: "Peel and Stick"},
    { name: "Peel & Stick + IronOn"},
    { name: "Not Sure"}
  ];


  var fabricOptions = [
    { name: "Fabric" },
    { name: "Twill" },
    { name: "Pique" },
    { name: "Polyester" },
    { name: "Cotton" },
    { name: "Fleece" },
    { name: "Towel" },
    { name: "Leather" },
    { name: "Denim" },
    { name: "Silk" },
    { name: "Nylon" },
    { name: "Quilt" },
    { name: "Canvas" },
    { name: "Single Jersey" },
    { name: "Wool" },
    { name: "Velvet" },
    { name: "Apron" },
    { name: "Blanket" },
    { name: "Polar Fleece" },
    { name: "Stretchy Polyester/Light Knit" },
    { name: "Knit" },
    { name: "Others" }
  ];
    
  

export const siteConfig = [
    { key: 'quoteNumber', value: 0 },
    { key: 'orderNumber', value: 0 },
    { key: 'invoiceNumber', value: 0 },
    { key: 'designTypes', value: designTypes },
    { key: 'backing', value: backingOptions },
    { key: 'placement', value: placement },
    { key: 'fabric', value: fabricOptions},
    { key: 'fileFormat', value: formatOptions },

];