const cityData = [
  {
    "city": "BRAMALEA",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "BRAMPTON",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "CONCORD",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "DOWNSVIEW",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "ETOBICOKE",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "MAPLE",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "MISSISSAUGA",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "NASHVILLE",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "NORTH YORK",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "NORVAL",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "PORT CREDIT",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "REXDALE",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "STREETSVILLE",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "THORNHILL",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "TORONTO WEST",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "VAUGHAN",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "WESTON",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "WOODBRIDGE",
    "rate": 415.0,
    "zone": "ZONE1"
  },
  {
    "city": "BOLTON",
    "rate": 515.0,
    "zone": "ZONE2"
  },
  {
    "city": "CALEDON",
    "rate": 515.0,
    "zone": "ZONE2"
  },
  {
    "city": "HORNBY",
    "rate": 515.0,
    "zone": "ZONE2"
  },
  {
    "city": "MARKHAM",
    "rate": 515.0,
    "zone": "ZONE2"
  },
  {
    "city": "MILTON",
    "rate": 515.0,
    "zone": "ZONE2"
  },
  {
    "city": "OAKVILLE",
    "rate": 515.0,
    "zone": "ZONE2"
  },
  {
    "city": "RICHMOND HILL",
    "rate": 515.0,
    "zone": "ZONE2"
  },
  {
    "city": "SCARBOROUGH",
    "rate": 515.0,
    "zone": "ZONE2"
  },
  {
    "city": "TORONTO EAST",
    "rate": 515.0,
    "zone": "ZONE2"
  },
  {
    "city": "WEST HILL",
    "rate": 515.0,
    "zone": "ZONE2"
  },
  {
    "city": "TERMINALS",
    "rate": 515.0,
    "zone": "ZONE2"
  },
  {
    "city": "MUSKET",
    "rate": 515.0,
    "zone": "ZONE2"
  },
  {
    "city": "ACTON",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "AILSA CRAIG",
    "rate": 756.13,
    "zone": "other"
  },
  {
    "city": "AJAX",
    "rate": 454.25,
    "zone": "other"
  },
  {
    "city": "ALBAN",
    "rate": 1141.38,
    "zone": "other"
  },
  {
    "city": "ALBERTON",
    "rate": 4955.06,
    "zone": "other"
  },
  {
    "city": "ALEXANDRIA",
    "rate": 1624.38,
    "zone": "other"
  },
  {
    "city": "ALFRED",
    "rate": 1737.94,
    "zone": "other"
  },
  {
    "city": "ALGONQUIN PARK",
    "rate": 1016.31,
    "zone": "other"
  },
  {
    "city": "ALLANBURG",
    "rate": 605.19,
    "zone": "other"
  },
  {
    "city": "ALLISTON",
    "rate": 508.88,
    "zone": "other"
  },
  {
    "city": "ALMA",
    "rate": 585.06,
    "zone": "other"
  },
  {
    "city": "ALMONTE",
    "rate": 1336.88,
    "zone": "other"
  },
  {
    "city": "ALVISTON",
    "rate": 947.31,
    "zone": "other"
  },
  {
    "city": "AMBERLEY",
    "rate": 935.81,
    "zone": "other"
  },
  {
    "city": "AMHERSTBURG",
    "rate": 1295.19,
    "zone": "other"
  },
  {
    "city": "ANCASTER",
    "rate": 488.75,
    "zone": "other"
  },
  {
    "city": "ANGUS",
    "rate": 557.75,
    "zone": "other"
  },
  {
    "city": "APPLE HILL",
    "rate": 1561.13,
    "zone": "other"
  },
  {
    "city": "ARDEN",
    "rate": 1076.69,
    "zone": "other"
  },
  {
    "city": "ARGYLE",
    "rate": 605.19,
    "zone": "other"
  },
  {
    "city": "ARISS",
    "rate": 553.44,
    "zone": "other"
  },
  {
    "city": "ARKO NA",
    "rate": 934.38,
    "zone": "other"
  },
  {
    "city": "ARNPRIOR",
    "rate": 1428.88,
    "zone": "other"
  },
  {
    "city": "ARTHUR",
    "rate": 533.31,
    "zone": "other"
  },
  {
    "city": "ARVA",
    "rate": 797.81,
    "zone": "other"
  },
  {
    "city": "ASHBURN",
    "rate": 540.5,
    "zone": "other"
  },
  {
    "city": "ATIKOKAN",
    "rate": 4545.38,
    "zone": "other"
  },
  {
    "city": "ATWOOD",
    "rate": 701.5,
    "zone": "other"
  },
  {
    "city": "AUNURN",
    "rate": 836.63,
    "zone": "other"
  },
  {
    "city": "AURORA",
    "rate": 432.69,
    "zone": "other"
  },
  {
    "city": "AYLMER",
    "rate": 767.63,
    "zone": "other"
  },
  {
    "city": "AYR",
    "rate": 546.25,
    "zone": "other"
  },
  {
    "city": "AYTON",
    "rate": 644.0,
    "zone": "other"
  },
  {
    "city": "AZILDA",
    "rate": 1354.13,
    "zone": "other"
  },
  {
    "city": "BADDOW",
    "rate": 692.88,
    "zone": "other"
  },
  {
    "city": "BADEN",
    "rate": 577.88,
    "zone": "other"
  },
  {
    "city": "BADJEROS",
    "rate": 569.25,
    "zone": "other"
  },
  {
    "city": "BAILIEBORO",
    "rate": 654.06,
    "zone": "other"
  },
  {
    "city": "BALA",
    "rate": 754.69,
    "zone": "other"
  },
  {
    "city": "BAILINAFAD",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "BALMERTOWN",
    "rate": 5557.38,
    "zone": "other"
  },
  {
    "city": "BALTIMORE",
    "rate": 641.13,
    "zone": "other"
  },
  {
    "city": "BANCROFT",
    "rate": 997.63,
    "zone": "other"
  },
  {
    "city": "BARRIE",
    "rate": 524.69,
    "zone": "other"
  },
  {
    "city": "BARR'S BAY",
    "rate": 1180.19,
    "zone": "other"
  },
  {
    "city": "BARWICK",
    "rate": 5062.88,
    "zone": "other"
  },
  {
    "city": "BATAWA",
    "rate": 803.56,
    "zone": "other"
  },
  {
    "city": "BATCHEWANA BAY",
    "rate": 2367.56,
    "zone": "other"
  },
  {
    "city": "BATH",
    "rate": 994.75,
    "zone": "other"
  },
  {
    "city": "BAYFIELD",
    "rate": 794.94,
    "zone": "other"
  },
  {
    "city": "BAYSVILLE",
    "rate": 794.94,
    "zone": "other"
  },
  {
    "city": "BEACHVILLE",
    "rate": 641.13,
    "zone": "other"
  },
  {
    "city": "BEAMSVILLE",
    "rate": 546.25,
    "zone": "other"
  },
  {
    "city": "BEAVERTON",
    "rate": 654.06,
    "zone": "other"
  },
  {
    "city": "BECHER",
    "rate": 1088.19,
    "zone": "other"
  },
  {
    "city": "BEETON",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "BELFOUNTAIN",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "BELLEVILLE",
    "rate": 820.81,
    "zone": "other"
  },
  {
    "city": "BELMONT",
    "rate": 743.19,
    "zone": "other"
  },
  {
    "city": "BELWOOD",
    "rate": 493.06,
    "zone": "other"
  },
  {
    "city": "BENT RIVER",
    "rate": 878.31,
    "zone": "other"
  },
  {
    "city": "BERKELEY",
    "rate": 608.06,
    "zone": "other"
  },
  {
    "city": "BETHANY",
    "rate": 629.63,
    "zone": "other"
  },
  {
    "city": "BINBROOK",
    "rate": 537.63,
    "zone": "other"
  },
  {
    "city": "BLACKSTOCK",
    "rate": 557.75,
    "zone": "other"
  },
  {
    "city": "BLENHEIM",
    "rate": 1040.75,
    "zone": "other"
  },
  {
    "city": "BLIND RIVER",
    "rate": 1723.56,
    "zone": "other"
  },
  {
    "city": "BLOOMFIELD",
    "rate": 902.75,
    "zone": "other"
  },
  {
    "city": "BLUE MOUNTAIN",
    "rate": 575.0,
    "zone": "other"
  },
  {
    "city": "BLUEVALE",
    "rate": 715.88,
    "zone": "other"
  },
  {
    "city": "BLYTH",
    "rate": 823.69,
    "zone": "other"
  },
  {
    "city": "BLYTHESWOOD",
    "rate": 1177.31,
    "zone": "other"
  },
  {
    "city": "BOBCAYGEON",
    "rate": 770.5,
    "zone": "other"
  },
  {
    "city": "BORDEN",
    "rate": 556.31,
    "zone": "other"
  },
  {
    "city": "BOTHWELL",
    "rate": 925.75,
    "zone": "other"
  },
  {
    "city": "BOWMAN",
    "rate": 1722.13,
    "zone": "other"
  },
  {
    "city": "BOWMANVILLE",
    "rate": 559.19,
    "zone": "other"
  },
  {
    "city": "BRACEBRIDGE",
    "rate": 746.06,
    "zone": "other"
  },
  {
    "city": "BRADFORD",
    "rate": 438.44,
    "zone": "other"
  },
  {
    "city": "BRANCHTON",
    "rate": 556.31,
    "zone": "other"
  },
  {
    "city": "BRANTFORD",
    "rate": 543.38,
    "zone": "other"
  },
  {
    "city": "BRAYANSTON",
    "rate": 759.0,
    "zone": "other"
  },
  {
    "city": "BRECHIN",
    "rate": 615.25,
    "zone": "other"
  },
  {
    "city": "BRENT",
    "rate": 1489.25,
    "zone": "other"
  },
  {
    "city": "BRESLAU",
    "rate": 566.38,
    "zone": "other"
  },
  {
    "city": "BRIGDEN",
    "rate": 1046.5,
    "zone": "other"
  },
  {
    "city": "BRIGHT",
    "rate": 587.94,
    "zone": "other"
  },
  {
    "city": "BRIGHTON",
    "rate": 734.56,
    "zone": "other"
  },
  {
    "city": "BRIGHT'S GROVE",
    "rate": 989.0,
    "zone": "other"
  },
  {
    "city": "BRITI",
    "rate": 1039.31,
    "zone": "other"
  },
  {
    "city": "BROCKVILLE",
    "rate": 1234.81,
    "zone": "other"
  },
  {
    "city": "BRODHAGEN",
    "rate": 677.06,
    "zone": "other"
  },
  {
    "city": "BRONTE",
    "rate": 419.75,
    "zone": "other"
  },
  {
    "city": "BROOKLIN",
    "rate": 511.75,
    "zone": "other"
  },
  {
    "city": "BROWNSVILLE",
    "rate": 707.25,
    "zone": "other"
  },
  {
    "city": "BRUCE MINES",
    "rate": 1887.44,
    "zone": "other"
  },
  {
    "city": "BRUNNER",
    "rate": 654.06,
    "zone": "other"
  },
  {
    "city": "BRUSSELS",
    "rate": 746.06,
    "zone": "other"
  },
  {
    "city": "BRYANSTON",
    "rate": 800.69,
    "zone": "other"
  },
  {
    "city": "BURFORD",
    "rate": 613.81,
    "zone": "other"
  },
  {
    "city": "BURGESSVILLE",
    "rate": 684.25,
    "zone": "other"
  },
  {
    "city": "BURK'S FALL",
    "rate": 958.81,
    "zone": "other"
  },
  {
    "city": "BURLEIGH FALLS",
    "rate": 779.13,
    "zone": "other"
  },
  {
    "city": "BURLINGTON",
    "rate": 438.44,
    "zone": "other"
  },
  {
    "city": "BURTCH",
    "rate": 579.31,
    "zone": "other"
  },
  {
    "city": "BUTTONVILLE",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "CACHE BAY",
    "rate": 1290.88,
    "zone": "other"
  },
  {
    "city": "CAINSVILLE",
    "rate": 546.25,
    "zone": "other"
  },
  {
    "city": "CAISTORVILLE",
    "rate": 575.0,
    "zone": "other"
  },
  {
    "city": "CALEDON EAST",
    "rate": 330.63,
    "zone": "other"
  },
  {
    "city": "CALEDONIA",
    "rate": 569.25,
    "zone": "other"
  },
  {
    "city": "CALLANDER",
    "rate": 1138.5,
    "zone": "other"
  },
  {
    "city": "CAMBRIDGE",
    "rate": 521.81,
    "zone": "other"
  },
  {
    "city": "CAMERON",
    "rate": 707.25,
    "zone": "other"
  },
  {
    "city": "CAMLACHIE",
    "rate": 974.63,
    "zone": "other"
  },
  {
    "city": "CAMP BORDEN",
    "rate": 543.38,
    "zone": "other"
  },
  {
    "city": "CAMPBELLCROFT",
    "rate": 626.75,
    "zone": "other"
  },
  {
    "city": "CAMPBELLFORD",
    "rate": 800.69,
    "zone": "other"
  },
  {
    "city": "CAMPBELLVILLE",
    "rate": 422.63,
    "zone": "other"
  },
  {
    "city": "CANFEILD",
    "rate": 569.25,
    "zone": "other"
  },
  {
    "city": "CANNIFON",
    "rate": 817.94,
    "zone": "other"
  },
  {
    "city": "CANNINGTON",
    "rate": 613.81,
    "zone": "other"
  },
  {
    "city": "CAPREOL",
    "rate": 1390.06,
    "zone": "other"
  },
  {
    "city": "CARDINAL",
    "rate": 1336.88,
    "zone": "other"
  },
  {
    "city": "CARGILL",
    "rate": 767.63,
    "zone": "other"
  },
  {
    "city": "CARLETON PLACE",
    "rate": 1309.56,
    "zone": "other"
  },
  {
    "city": "CARLISLE",
    "rate": 435.56,
    "zone": "other"
  },
  {
    "city": "CASSELMAN",
    "rate": 1611.44,
    "zone": "other"
  },
  {
    "city": "CAVAN",
    "rate": 635.38,
    "zone": "other"
  },
  {
    "city": "CAYUGA",
    "rate": 543.38,
    "zone": "other"
  },
  {
    "city": "CENTRALIA",
    "rate": 764.75,
    "zone": "other"
  },
  {
    "city": "CHALK RIVER",
    "rate": 1539.56,
    "zone": "other"
  },
  {
    "city": "CHAPLEAU",
    "rate": 2439.44,
    "zone": "other"
  },
  {
    "city": "CHARING CROSS",
    "rate": 1033.56,
    "zone": "other"
  },
  {
    "city": "CHATHAM",
    "rate": 1027.81,
    "zone": "other"
  },
  {
    "city": "CHATSWORTH",
    "rate": 656.94,
    "zone": "other"
  },
  {
    "city": "CHELTENHAM",
    "rate": 330.63,
    "zone": "other"
  },
  {
    "city": "CHEPSTOW",
    "rate": 679.94,
    "zone": "other"
  },
  {
    "city": "CHESLEY",
    "rate": 751.81,
    "zone": "other"
  },
  {
    "city": "CHESTERVILLE",
    "rate": 1459.06,
    "zone": "other"
  },
  {
    "city": "CHIPAWA",
    "rate": 641.13,
    "zone": "other"
  },
  {
    "city": "CHURCHILL",
    "rate": 485.88,
    "zone": "other"
  },
  {
    "city": "CLAREMONT",
    "rate": 472.94,
    "zone": "other"
  },
  {
    "city": "CLARKSBURG",
    "rate": 608.06,
    "zone": "other"
  },
  {
    "city": "CLIFFORD",
    "rate": 621.0,
    "zone": "other"
  },
  {
    "city": "CLINTON -",
    "rate": 787.75,
    "zone": "other"
  },
  {
    "city": "COATSWORTH",
    "rate": 1259.25,
    "zone": "other"
  },
  {
    "city": "COBALT",
    "rate": 1569.75,
    "zone": "other"
  },
  {
    "city": "COBDEN",
    "rate": 1384.31,
    "zone": "other"
  },
  {
    "city": "COBOCONK",
    "rate": 779.13,
    "zone": "other"
  },
  {
    "city": "COBOURG",
    "rate": 638.25,
    "zone": "other"
  },
  {
    "city": "COCHRANE",
    "rate": 2199.38,
    "zone": "other"
  },
  {
    "city": "COE HILL",
    "rate": 935.81,
    "zone": "other"
  },
  {
    "city": "COLBORNE",
    "rate": 695.75,
    "zone": "other"
  },
  {
    "city": "COLD WATER",
    "rate": 629.63,
    "zone": "other"
  },
  {
    "city": "COLLINWOOD",
    "rate": 569.25,
    "zone": "other"
  },
  {
    "city": "COMBER",
    "rate": 1135.63,
    "zone": "other"
  },
  {
    "city": "COMBERMERE",
    "rate": 1127.0,
    "zone": "other"
  },
  {
    "city": "CONISTON",
    "rate": 1328.25,
    "zone": "other"
  },
  {
    "city": "COOKSTOWN",
    "rate": 493.06,
    "zone": "other"
  },
  {
    "city": "COOPER",
    "rate": 971.75,
    "zone": "other"
  },
  {
    "city": "COPPER CLIFF",
    "rate": 1328.25,
    "zone": "other"
  },
  {
    "city": "CORBYVILLE",
    "rate": 826.56,
    "zone": "other"
  },
  {
    "city": "CORNWALL",
    "rate": 1507.94,
    "zone": "other"
  },
  {
    "city": "CORUNNA",
    "rate": 1058.0,
    "zone": "other"
  },
  {
    "city": "COTTAM",
    "rate": 1204.63,
    "zone": "other"
  },
  {
    "city": "COURTICE",
    "rate": 524.69,
    "zone": "other"
  },
  {
    "city": "COURTLAND",
    "rate": 713.0,
    "zone": "other"
  },
  {
    "city": "COURTRIGHT",
    "rate": 1082.44,
    "zone": "other"
  },
  {
    "city": "CRAIGHURST",
    "rate": 543.38,
    "zone": "other"
  },
  {
    "city": "CREDITON",
    "rate": 809.31,
    "zone": "other"
  },
  {
    "city": "CREEMORE",
    "rate": 517.5,
    "zone": "other"
  },
  {
    "city": "CREIGHTON",
    "rate": 605.19,
    "zone": "other"
  },
  {
    "city": "CRYSTAL BEACH",
    "rate": 698.63,
    "zone": "other"
  },
  {
    "city": "CUMBERLAND",
    "rate": 1599.94,
    "zone": "other"
  },
  {
    "city": "CUMVERLAND BEACH",
    "rate": 615.25,
    "zone": "other"
  },
  {
    "city": "DACRE",
    "rate": 1303.81,
    "zone": "other"
  },
  {
    "city": "DASHWOOD",
    "rate": 812.19,
    "zone": "other"
  },
  {
    "city": "DEEP RIVER",
    "rate": 1536.69,
    "zone": "other"
  },
  {
    "city": "DELAWARE",
    "rate": 820.81,
    "zone": "other"
  },
  {
    "city": "DELHI",
    "rate": 692.88,
    "zone": "other"
  },
  {
    "city": "DELTA",
    "rate": 1171.56,
    "zone": "other"
  },
  {
    "city": "DENFIELD",
    "rate": 756.13,
    "zone": "other"
  },
  {
    "city": "DESERONTO",
    "rate": 902.75,
    "zone": "other"
  },
  {
    "city": "DEVLIN",
    "rate": 4991.0,
    "zone": "other"
  },
  {
    "city": "DOBBINTON",
    "rate": 731.69,
    "zone": "other"
  },
  {
    "city": "DORCHESTER",
    "rate": 698.63,
    "zone": "other"
  },
  {
    "city": "DORKING",
    "rate": 605.19,
    "zone": "other"
  },
  {
    "city": "DORSET",
    "rate": 866.81,
    "zone": "other"
  },
  {
    "city": "DOUGLAS POINT",
    "rate": 767.63,
    "zone": "other"
  },
  {
    "city": "DOVER CENTER",
    "rate": 1069.5,
    "zone": "other"
  },
  {
    "city": "DRAYTON",
    "rate": 543.38,
    "zone": "other"
  },
  {
    "city": "DRESDEN",
    "rate": 1049.38,
    "zone": "other"
  },
  {
    "city": "DRUMBO",
    "rate": 566.38,
    "zone": "other"
  },
  {
    "city": "DRYDEN",
    "rate": 4946.44,
    "zone": "other"
  },
  {
    "city": "DUBLIN",
    "rate": 701.5,
    "zone": "other"
  },
  {
    "city": "DUNCHURCH",
    "rate": 964.56,
    "zone": "other"
  },
  {
    "city": "DUNDALK",
    "rate": 556.31,
    "zone": "other"
  },
  {
    "city": "DUNDAS",
    "rate": 501.69,
    "zone": "other"
  },
  {
    "city": "DUNGANNON",
    "rate": 856.75,
    "zone": "other"
  },
  {
    "city": "DUNVILLE",
    "rate": 605.19,
    "zone": "other"
  },
  {
    "city": "DURBREUIL VILLE",
    "rate": 2923.88,
    "zone": "other"
  },
  {
    "city": "DURHAM SCUGOG",
    "rate": 560.63,
    "zone": "other"
  },
  {
    "city": "DURHAM WEST GREY",
    "rate": 656.94,
    "zone": "other"
  },
  {
    "city": "DWIGHT",
    "rate": 898.44,
    "zone": "other"
  },
  {
    "city": "EARLTON",
    "rate": 1683.31,
    "zone": "other"
  },
  {
    "city": "EDGAR",
    "rate": 552.0,
    "zone": "other"
  },
  {
    "city": "ELDORADO",
    "rate": 947.31,
    "zone": "other"
  },
  {
    "city": "ELGIN",
    "rate": 1157.19,
    "zone": "other"
  },
  {
    "city": "ELGINBRUG",
    "rate": 1024.94,
    "zone": "other"
  },
  {
    "city": "ELK LAKE",
    "rate": 1782.5,
    "zone": "other"
  },
  {
    "city": "ELLIOT LAKE",
    "rate": 1716.38,
    "zone": "other"
  },
  {
    "city": "ELMIRA",
    "rate": 560.63,
    "zone": "other"
  },
  {
    "city": "ELMVALE",
    "rate": 560.63,
    "zone": "other"
  },
  {
    "city": "ELMWOOD",
    "rate": 715.88,
    "zone": "other"
  },
  {
    "city": "ELORA",
    "rate": 546.25,
    "zone": "other"
  },
  {
    "city": "EMBRO",
    "rate": 635.38,
    "zone": "other"
  },
  {
    "city": "EMERYVILLE",
    "rate": 1165.81,
    "zone": "other"
  },
  {
    "city": "ENGLEHEART",
    "rate": 1720.69,
    "zone": "other"
  },
  {
    "city": "ENNETT",
    "rate": 1016.31,
    "zone": "other"
  },
  {
    "city": "ENNISKILLIN",
    "rate": 994.75,
    "zone": "other"
  },
  {
    "city": "ENNISMORE",
    "rate": 725.94,
    "zone": "other"
  },
  {
    "city": "ERIEAU",
    "rate": 1060.88,
    "zone": "other"
  },
  {
    "city": "ERIN",
    "rate": 432.69,
    "zone": "other"
  },
  {
    "city": "ESPANOLA",
    "rate": 1505.06,
    "zone": "other"
  },
  {
    "city": "ESSEX",
    "rate": 1190.25,
    "zone": "other"
  },
  {
    "city": "ETHEL",
    "rate": 713.0,
    "zone": "other"
  },
  {
    "city": "EVERET",
    "rate": 464.31,
    "zone": "other"
  },
  {
    "city": "EXETER",
    "rate": 782.0,
    "zone": "other"
  },
  {
    "city": "FALCONBRIDGE",
    "rate": 836.63,
    "zone": "other"
  },
  {
    "city": "FAUQUIER",
    "rate": 2442.31,
    "zone": "other"
  },
  {
    "city": "FENELLA",
    "rate": 684.25,
    "zone": "other"
  },
  {
    "city": "FENEL ON FALLS",
    "rate": 740.31,
    "zone": "other"
  },
  {
    "city": "FENWICK",
    "rate": 602.31,
    "zone": "other"
  },
  {
    "city": "FERGUS",
    "rate": 549.13,
    "zone": "other"
  },
  {
    "city": "FEVERSHAM",
    "rate": 579.31,
    "zone": "other"
  },
  {
    "city": "FINGAL",
    "rate": 812.19,
    "zone": "other"
  },
  {
    "city": "FISHERVILLE",
    "rate": 615.25,
    "zone": "other"
  },
  {
    "city": "FLAMBOROUGH",
    "rate": 495.94,
    "zone": "other"
  },
  {
    "city": "FLESHERTON",
    "rate": 560.63,
    "zone": "other"
  },
  {
    "city": "FLOREDALE",
    "rate": 577.88,
    "zone": "other"
  },
  {
    "city": "FLORENCE",
    "rate": 964.56,
    "zone": "other"
  },
  {
    "city": "FONTHILL",
    "rate": 608.06,
    "zone": "other"
  },
  {
    "city": "FORDWICH",
    "rate": 674.19,
    "zone": "other"
  },
  {
    "city": "FOREST",
    "rate": 961.69,
    "zone": "other"
  },
  {
    "city": "FORMOSA",
    "rate": 723.06,
    "zone": "other"
  },
  {
    "city": "FORT ERIE",
    "rate": 704.38,
    "zone": "other"
  },
  {
    "city": "FORT FRANCES",
    "rate": 4955.06,
    "zone": "other"
  },
  {
    "city": "FOXBORO",
    "rate": 836.63,
    "zone": "other"
  },
  {
    "city": "FRANKFORD",
    "rate": 790.63,
    "zone": "other"
  },
  {
    "city": "FREELTON",
    "rate": 432.69,
    "zone": "other"
  },
  {
    "city": "FULTON",
    "rate": 550.56,
    "zone": "other"
  },
  {
    "city": "GALT",
    "rate": 498.81,
    "zone": "other"
  },
  {
    "city": "GAMEBRIDGE",
    "rate": 654.06,
    "zone": "other"
  },
  {
    "city": "GANANOQUE",
    "rate": 530.44,
    "zone": "other"
  },
  {
    "city": "GATINEAU",
    "rate": 1552.5,
    "zone": "other"
  },
  {
    "city": "GEORGETOWN",
    "rate": 330.63,
    "zone": "other"
  },
  {
    "city": "GERALDTON",
    "rate": 3738.94,
    "zone": "other"
  },
  {
    "city": "GILFORD",
    "rate": 493.06,
    "zone": "other"
  },
  {
    "city": "GLEN HURON",
    "rate": 559.19,
    "zone": "other"
  },
  {
    "city": "GLEN MILLER",
    "rate": 779.13,
    "zone": "other"
  },
  {
    "city": "GLEN MORRIS",
    "rate": 543.38,
    "zone": "other"
  },
  {
    "city": "GLENBURNIE",
    "rate": 1043.63,
    "zone": "other"
  },
  {
    "city": "GLENCOE",
    "rate": 875.44,
    "zone": "other"
  },
  {
    "city": "GODERICH",
    "rate": 823.69,
    "zone": "other"
  },
  {
    "city": "GOODERHAM",
    "rate": 892.69,
    "zone": "other"
  },
  {
    "city": "GOODWOOD",
    "rate": 550.56,
    "zone": "other"
  },
  {
    "city": "GORE BAY",
    "rate": 1776.75,
    "zone": "other"
  },
  {
    "city": "GORMLEY",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "GORRIE",
    "rate": 718.75,
    "zone": "other"
  },
  {
    "city": "GOWANSTOWN",
    "rate": 671.31,
    "zone": "other"
  },
  {
    "city": "GRAFTON",
    "rate": 662.69,
    "zone": "other"
  },
  {
    "city": "GRAND BEND",
    "rate": 826.56,
    "zone": "other"
  },
  {
    "city": "GRAND VALLEY",
    "rate": 483.0,
    "zone": "other"
  },
  {
    "city": "GRANTON",
    "rate": 728.81,
    "zone": "other"
  },
  {
    "city": "GRAPHITE LAKE",
    "rate": 977.5,
    "zone": "other"
  },
  {
    "city": "GRASSIE",
    "rate": 559.19,
    "zone": "other"
  },
  {
    "city": "GRASSY NARROW",
    "rate": 5341.75,
    "zone": "other"
  },
  {
    "city": "GRAVENHURST",
    "rate": 687.13,
    "zone": "other"
  },
  {
    "city": "GRIMSBY",
    "rate": 543.38,
    "zone": "other"
  },
  {
    "city": "GUELPH",
    "rate": 527.56,
    "zone": "other"
  },
  {
    "city": "GUNTER",
    "rate": 1052.25,
    "zone": "other"
  },
  {
    "city": "HANGERSVILLE",
    "rate": 572.13,
    "zone": "other"
  },
  {
    "city": "HAILEYBURY",
    "rate": 1597.06,
    "zone": "other"
  },
  {
    "city": "HALDIMOND",
    "rate": 552.0,
    "zone": "other"
  },
  {
    "city": "HALEY STATION",
    "rate": 1441.81,
    "zone": "other"
  },
  {
    "city": "HALIBURTON",
    "rate": 931.5,
    "zone": "other"
  },
  {
    "city": "HALTON HILLS",
    "rate": 330.63,
    "zone": "other"
  },
  {
    "city": "HAMILTON",
    "rate": 495.94,
    "zone": "other"
  },
  {
    "city": "HAMPTON",
    "rate": 536.19,
    "zone": "other"
  },
  {
    "city": "HANNON",
    "rate": 533.31,
    "zone": "other"
  },
  {
    "city": "HANOVER",
    "rate": 713.0,
    "zone": "other"
  },
  {
    "city": "HARCOURT",
    "rate": 989.0,
    "zone": "other"
  },
  {
    "city": "HARLEY",
    "rate": 1638.75,
    "zone": "other"
  },
  {
    "city": "HARRISTON",
    "rate": 629.63,
    "zone": "other"
  },
  {
    "city": "HARROW",
    "rate": 1246.31,
    "zone": "other"
  },
  {
    "city": "HARROWSMITH",
    "rate": 1006.25,
    "zone": "other"
  },
  {
    "city": "HASTINGS",
    "rate": 794.94,
    "zone": "other"
  },
  {
    "city": "HAVELOCK",
    "rate": 812.19,
    "zone": "other"
  },
  {
    "city": "HAWK JUNCTION",
    "rate": 2795.94,
    "zone": "other"
  },
  {
    "city": "HAWKESBURY",
    "rate": 1704.88,
    "zone": "other"
  },
  {
    "city": "HAWKESTONE",
    "rate": 560.63,
    "zone": "other"
  },
  {
    "city": "HAWKESVILLE",
    "rate": 575.0,
    "zone": "other"
  },
  {
    "city": "HEARST",
    "rate": 2852.0,
    "zone": "other"
  },
  {
    "city": "HEALTHCOTE",
    "rate": 641.13,
    "zone": "other"
  },
  {
    "city": "HEMLO",
    "rate": 3128.0,
    "zone": "other"
  },
  {
    "city": "HENSALL",
    "rate": 782.0,
    "zone": "other"
  },
  {
    "city": "HICKSON",
    "rate": 644.0,
    "zone": "other"
  },
  {
    "city": "HIGHGATE",
    "rate": 925.75,
    "zone": "other"
  },
  {
    "city": "HILLSBURGH",
    "rate": 448.5,
    "zone": "other"
  },
  {
    "city": "HILLSDALE",
    "rate": 560.63,
    "zone": "other"
  },
  {
    "city": "HOCKLEY",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "HOLLAND LANDING",
    "rate": 451.38,
    "zone": "other"
  },
  {
    "city": "HOLYROOD",
    "rate": 815.06,
    "zone": "other"
  },
  {
    "city": "HONEY HARBOUR",
    "rate": 684.25,
    "zone": "other"
  },
  {
    "city": "HOPEVILLE",
    "rate": 541.94,
    "zone": "other"
  },
  {
    "city": "HORNEPAYNE",
    "rate": 3158.19,
    "zone": "other"
  },
  {
    "city": "HORNING MILLS",
    "rate": 524.69,
    "zone": "other"
  },
  {
    "city": "HOWICK",
    "rate": 690.0,
    "zone": "other"
  },
  {
    "city": "HUNTSVILLE",
    "rate": 828.0,
    "zone": "other"
  },
  {
    "city": "HURON PARK",
    "rate": 809.31,
    "zone": "other"
  },
  {
    "city": "HYDE PARK",
    "rate": 790.63,
    "zone": "other"
  },
  {
    "city": "IGNACE",
    "rate": 4653.19,
    "zone": "other"
  },
  {
    "city": "ILDERTON",
    "rate": 809.31,
    "zone": "other"
  },
  {
    "city": "INGERSOLL",
    "rate": 648.31,
    "zone": "other"
  },
  {
    "city": "INGLEWOOD",
    "rate": 330.63,
    "zone": "other"
  },
  {
    "city": "INKERMAN",
    "rate": 1431.75,
    "zone": "other"
  },
  {
    "city": "INNERKIP",
    "rate": 579.31,
    "zone": "other"
  },
  {
    "city": "INNISFIL",
    "rate": 521.81,
    "zone": "other"
  },
  {
    "city": "INWOOD",
    "rate": 950.19,
    "zone": "other"
  },
  {
    "city": "IONA",
    "rate": 823.69,
    "zone": "other"
  },
  {
    "city": "IRON BRIDGE",
    "rate": 1795.44,
    "zone": "other"
  },
  {
    "city": "IRONDALE",
    "rate": 884.06,
    "zone": "other"
  },
  {
    "city": "IROQUOIS",
    "rate": 1357.0,
    "zone": "other"
  },
  {
    "city": "IROQUOIS FALLS",
    "rate": 2082.94,
    "zone": "other"
  },
  {
    "city": "ISLAND FALLS",
    "rate": 2486.88,
    "zone": "other"
  },
  {
    "city": "JANETVILLE",
    "rate": 641.13,
    "zone": "other"
  },
  {
    "city": "JARVIS",
    "rate": 602.31,
    "zone": "other"
  },
  {
    "city": "JEANETTES CREEK",
    "rate": 1088.19,
    "zone": "other"
  },
  {
    "city": "JERSEYVILLE",
    "rate": 556.31,
    "zone": "other"
  },
  {
    "city": "JORDAN",
    "rate": 560.63,
    "zone": "other"
  },
  {
    "city": "KAKABEKA FALLS",
    "rate": 4108.38,
    "zone": "other"
  },
  {
    "city": "KALADAR",
    "rate": 1022.06,
    "zone": "other"
  },
  {
    "city": "KANATA",
    "rate": 1533.81,
    "zone": "other"
  },
  {
    "city": "KAPUSKASING",
    "rate": 2525.69,
    "zone": "other"
  },
  {
    "city": "KATRINE",
    "rate": 917.13,
    "zone": "other"
  },
  {
    "city": "KEARNEY",
    "rate": 925.75,
    "zone": "other"
  },
  {
    "city": "KEENE",
    "rate": 728.81,
    "zone": "other"
  },
  {
    "city": "KEMBLE",
    "rate": 746.06,
    "zone": "other"
  },
  {
    "city": "KEMPTVILLE",
    "rate": 1400.13,
    "zone": "other"
  },
  {
    "city": "KENILWORTH",
    "rate": 572.13,
    "zone": "other"
  },
  {
    "city": "KENOGAMI LAKE",
    "rate": 1831.38,
    "zone": "other"
  },
  {
    "city": "KENORA",
    "rate": 5535.81,
    "zone": "other"
  },
  {
    "city": "KENT BRIDGE",
    "rate": 980.38,
    "zone": "other"
  },
  {
    "city": "KERWOOD",
    "rate": 884.06,
    "zone": "other"
  },
  {
    "city": "KESWICK",
    "rate": 506.0,
    "zone": "other"
  },
  {
    "city": "KETTLEBY",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "KILLALOE STATION",
    "rate": 1237.69,
    "zone": "other"
  },
  {
    "city": "KINCARDINE",
    "rate": 823.69,
    "zone": "other"
  },
  {
    "city": "KING CITY",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "KINGSTON",
    "rate": 1022.06,
    "zone": "other"
  },
  {
    "city": "KINGSVILLE",
    "rate": 1210.38,
    "zone": "other"
  },
  {
    "city": "KIRKFIELD",
    "rate": 644.0,
    "zone": "other"
  },
  {
    "city": "KIRKLAND LAKE",
    "rate": 1845.75,
    "zone": "other"
  },
  {
    "city": "KITCHENER",
    "rate": 546.25,
    "zone": "other"
  },
  {
    "city": "KLEINBURG",
    "rate": 330.63,
    "zone": "other"
  },
  {
    "city": "KOMOKA",
    "rate": 809.31,
    "zone": "other"
  },
  {
    "city": "LAKEFIELD",
    "rate": 740.31,
    "zone": "other"
  },
  {
    "city": "LAKEPORT",
    "rate": 713.0,
    "zone": "other"
  },
  {
    "city": "LASESHORE",
    "rate": 1155.75,
    "zone": "other"
  },
  {
    "city": "LAKESIDE",
    "rate": 692.88,
    "zone": "other"
  },
  {
    "city": "LAMBETH",
    "rate": 759.0,
    "zone": "other"
  },
  {
    "city": "LANARK",
    "rate": 1267.88,
    "zone": "other"
  },
  {
    "city": "LANGTON",
    "rate": 723.06,
    "zone": "other"
  },
  {
    "city": "LEAMINGTON",
    "rate": 1196.0,
    "zone": "other"
  },
  {
    "city": "LENNOX",
    "rate": 1024.94,
    "zone": "other"
  },
  {
    "city": "LEVACK",
    "rate": 1444.69,
    "zone": "other"
  },
  {
    "city": "LINCOLN",
    "rate": 566.38,
    "zone": "other"
  },
  {
    "city": "LINDSAY",
    "rate": 668.44,
    "zone": "other"
  },
  {
    "city": "LINWOOD",
    "rate": 605.19,
    "zone": "other"
  },
  {
    "city": "LISLE",
    "rate": 495.94,
    "zone": "other"
  },
  {
    "city": "LISTOWEL",
    "rate": 656.94,
    "zone": "other"
  },
  {
    "city": "UTILE CURRENT",
    "rate": 1608.56,
    "zone": "other"
  },
  {
    "city": "LIVELY",
    "rate": 1321.06,
    "zone": "other"
  },
  {
    "city": "LOBO",
    "rate": 806.44,
    "zone": "other"
  },
  {
    "city": "LONDESBOROUGH",
    "rate": 815.06,
    "zone": "other"
  },
  {
    "city": "LONDON",
    "rate": 764.75,
    "zone": "other"
  },
  {
    "city": "LONGFORD",
    "rate": 629.63,
    "zone": "other"
  },
  {
    "city": "LOWBANKS",
    "rate": 648.31,
    "zone": "other"
  },
  {
    "city": "LOWTHER",
    "rate": 2660.81,
    "zone": "other"
  },
  {
    "city": "LUCAN",
    "rate": 743.19,
    "zone": "other"
  },
  {
    "city": "LUCKNOW",
    "rate": 800.69,
    "zone": "other"
  },
  {
    "city": "LYNDEN",
    "rate": 556.31,
    "zone": "other"
  },
  {
    "city": "LYONS",
    "rate": 720.19,
    "zone": "other"
  },
  {
    "city": "MACTIER",
    "rate": 761.88,
    "zone": "other"
  },
  {
    "city": "MADAWASKA",
    "rate": 1187.38,
    "zone": "other"
  },
  {
    "city": "MADOC",
    "rate": 920.0,
    "zone": "other"
  },
  {
    "city": "MADSEN",
    "rate": 5584.69,
    "zone": "other"
  },
  {
    "city": "MAGNETAWAN",
    "rate": 1000.5,
    "zone": "other"
  },
  {
    "city": "MAIDSTONE",
    "rate": 1216.13,
    "zone": "other"
  },
  {
    "city": "MAITLAND",
    "rate": 1259.25,
    "zone": "other"
  },
  {
    "city": "MANILLA",
    "rate": 605.19,
    "zone": "other"
  },
  {
    "city": "MANITOULIN",
    "rate": 1190.25,
    "zone": "other"
  },
  {
    "city": "MANITOUWADGE",
    "rate": 3268.88,
    "zone": "other"
  },
  {
    "city": "MARATHON",
    "rate": 3218.56,
    "zone": "other"
  },
  {
    "city": "MARKDALE",
    "rate": 575.0,
    "zone": "other"
  },
  {
    "city": "MARMORA",
    "rate": 830.88,
    "zone": "other"
  },
  {
    "city": "MASSEY",
    "rate": 1533.81,
    "zone": "other"
  },
  {
    "city": "MATHESON",
    "rate": 1978.0,
    "zone": "other"
  },
  {
    "city": "MATIAWA",
    "rate": 1298.06,
    "zone": "other"
  },
  {
    "city": "MAXVILLE",
    "rate": 1582.69,
    "zone": "other"
  },
  {
    "city": "MAYNOOTH",
    "rate": 1043.63,
    "zone": "other"
  },
  {
    "city": "MEAFORD",
    "rate": 638.25,
    "zone": "other"
  },
  {
    "city": "MELBOURNE",
    "rate": 823.69,
    "zone": "other"
  },
  {
    "city": "MELROSE",
    "rate": 797.81,
    "zone": "other"
  },
  {
    "city": "MERLIN",
    "rate": 1069.5,
    "zone": "other"
  },
  {
    "city": "MIDHURST",
    "rate": 553.44,
    "zone": "other"
  },
  {
    "city": "MIDLAND",
    "rate": 632.5,
    "zone": "other"
  },
  {
    "city": "MILFORD",
    "rate": 961.69,
    "zone": "other"
  },
  {
    "city": "MILLBANK",
    "rate": 605.19,
    "zone": "other"
  },
  {
    "city": "MILLBROOK",
    "rate": 629.63,
    "zone": "other"
  },
  {
    "city": "MILLGROVE",
    "rate": 495.94,
    "zone": "other"
  },
  {
    "city": "MILLHAVEN",
    "rate": 991.88,
    "zone": "other"
  },
  {
    "city": "MILVERTON",
    "rate": 654.06,
    "zone": "other"
  },
  {
    "city": "MINDEMOYA",
    "rate": 1716.38,
    "zone": "other"
  },
  {
    "city": "MINDEN",
    "rate": 875.44,
    "zone": "other"
  },
  {
    "city": "MINESING",
    "rate": 575.0,
    "zone": "other"
  },
  {
    "city": "MITCHEL PARK",
    "rate": 435.56,
    "zone": "other"
  },
  {
    "city": "MITCHELL",
    "rate": 690.0,
    "zone": "other"
  },
  {
    "city": "MOFFAT",
    "rate": 435.56,
    "zone": "other"
  },
  {
    "city": "MONETVILLE",
    "rate": 1219.0,
    "zone": "other"
  },
  {
    "city": "MONKTON",
    "rate": 677.06,
    "zone": "other"
  },
  {
    "city": "MONTREAL RIVER HARBOUR",
    "rate": 2423.63,
    "zone": "other"
  },
  {
    "city": "MOOREFIELD",
    "rate": 632.5,
    "zone": "other"
  },
  {
    "city": "MOORETOWN",
    "rate": 1075.25,
    "zone": "other"
  },
  {
    "city": "MORRISBURG",
    "rate": 1395.81,
    "zone": "other"
  },
  {
    "city": "MOSCOW",
    "rate": 997.63,
    "zone": "other"
  },
  {
    "city": "MOUNT ALBERT",
    "rate": 524.69,
    "zone": "other"
  },
  {
    "city": "MOUNT BRYDGES",
    "rate": 806.44,
    "zone": "other"
  },
  {
    "city": "MOUNT ELGIN",
    "rate": 665.56,
    "zone": "other"
  },
  {
    "city": "MOUNT FOREST",
    "rate": 582.19,
    "zone": "other"
  },
  {
    "city": "MOUNT HOPE",
    "rate": 543.38,
    "zone": "other"
  },
  {
    "city": "NAIRN CENTER",
    "rate": 1417.38,
    "zone": "other"
  },
  {
    "city": "NANTICOKE",
    "rate": 632.5,
    "zone": "other"
  },
  {
    "city": "NAPANEE",
    "rate": 922.88,
    "zone": "other"
  },
  {
    "city": "NAVAN",
    "rate": 1624.38,
    "zone": "other"
  },
  {
    "city": "NELLES CORNERS",
    "rate": 596.56,
    "zone": "other"
  },
  {
    "city": "NEPEAN",
    "rate": 1530.94,
    "zone": "other"
  },
  {
    "city": "NEPHTON",
    "rate": 828.0,
    "zone": "other"
  },
  {
    "city": "NESTLETON",
    "rate": 575.0,
    "zone": "other"
  },
  {
    "city": "NEUSTADT",
    "rate": 671.31,
    "zone": "other"
  },
  {
    "city": "NEW CASTLE",
    "rate": 572.13,
    "zone": "other"
  },
  {
    "city": "NEW DUNDEE",
    "rate": 566.38,
    "zone": "other"
  },
  {
    "city": "NEW HAMBURG",
    "rate": 560.63,
    "zone": "other"
  },
  {
    "city": "NEW LISKEARD",
    "rate": 1608.56,
    "zone": "other"
  },
  {
    "city": "NEW LOWELL",
    "rate": 550.56,
    "zone": "other"
  },
  {
    "city": "NEWBURGH",
    "rate": 947.31,
    "zone": "other"
  },
  {
    "city": "NEWBURY",
    "rate": 905.63,
    "zone": "other"
  },
  {
    "city": "NEWCASTLE",
    "rate": 575.0,
    "zone": "other"
  },
  {
    "city": "NEWINGTON",
    "rate": 1483.5,
    "zone": "other"
  },
  {
    "city": "NEW MARKET",
    "rate": 441.31,
    "zone": "other"
  },
  {
    "city": "NEWTON",
    "rate": 626.75,
    "zone": "other"
  },
  {
    "city": "NEWTONVILLE",
    "rate": 557.75,
    "zone": "other"
  },
  {
    "city": "NIAGARA FALLS",
    "rate": 626.75,
    "zone": "other"
  },
  {
    "city": "NIAGARA ON THE LAKE",
    "rate": 626.75,
    "zone": "other"
  },
  {
    "city": "NIPIGON",
    "rate": 3718.81,
    "zone": "other"
  },
  {
    "city": "NOBEL",
    "rate": 872.56,
    "zone": "other"
  },
  {
    "city": "NOBLETON",
    "rate": 330.63,
    "zone": "other"
  },
  {
    "city": "NORFOLK",
    "rate": 638.25,
    "zone": "other"
  },
  {
    "city": "NORTH BAY",
    "rate": 1196.0,
    "zone": "other"
  },
  {
    "city": "NORTHBROOK",
    "rate": 1046.5,
    "zone": "other"
  },
  {
    "city": "NORWICH",
    "rate": 668.44,
    "zone": "other"
  },
  {
    "city": "NORWOOD",
    "rate": 756.13,
    "zone": "other"
  },
  {
    "city": "OAK RIDGES",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "OAKLAND",
    "rate": 623.88,
    "zone": "other"
  },
  {
    "city": "OAKWOOD",
    "rate": 629.63,
    "zone": "other"
  },
  {
    "city": "ODESSA",
    "rate": 989.0,
    "zone": "other"
  },
  {
    "city": "OLDCASTLE",
    "rate": 1237.69,
    "zone": "other"
  },
  {
    "city": "OMEMEE",
    "rate": 677.06,
    "zone": "other"
  },
  {
    "city": "ONAPING",
    "rate": 1438.94,
    "zone": "other"
  },
  {
    "city": "ORANGEVILLE",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "ORILLIA",
    "rate": 590.81,
    "zone": "other"
  },
  {
    "city": "ORO STATION",
    "rate": 549.13,
    "zone": "other"
  },
  {
    "city": "ORONO",
    "rate": 549.13,
    "zone": "other"
  },
  {
    "city": "ORTON",
    "rate": 480.13,
    "zone": "other"
  },
  {
    "city": "OSHAWA",
    "rate": 506.0,
    "zone": "other"
  },
  {
    "city": "OSHWEKEN",
    "rate": 554.88,
    "zone": "other"
  },
  {
    "city": "OTTAWA",
    "rate": 1543.88,
    "zone": "other"
  },
  {
    "city": "OTTERVILLE",
    "rate": 690.0,
    "zone": "other"
  },
  {
    "city": "OWEN SOUND",
    "rate": 679.94,
    "zone": "other"
  },
  {
    "city": "OXFORD STATION",
    "rate": 1384.31,
    "zone": "other"
  },
  {
    "city": "PAIN COURT",
    "rate": 1058.0,
    "zone": "other"
  },
  {
    "city": "PAISLEY",
    "rate": 759.0,
    "zone": "other"
  },
  {
    "city": "PALGRAVE",
    "rate": 330.63,
    "zone": "other"
  },
  {
    "city": "PALMER RAPIDS",
    "rate": 1129.88,
    "zone": "other"
  },
  {
    "city": "PALMERSTON",
    "rate": 575.0,
    "zone": "other"
  },
  {
    "city": "PARIS",
    "rate": 557.75,
    "zone": "other"
  },
  {
    "city": "PARKHILL",
    "rate": 836.63,
    "zone": "other"
  },
  {
    "city": "PARRY SOUND",
    "rate": 853.88,
    "zone": "other"
  },
  {
    "city": "PEFFERLAW",
    "rate": 560.63,
    "zone": "other"
  },
  {
    "city": "PEMBROKE",
    "rate": 1411.63,
    "zone": "other"
  },
  {
    "city": "PENETANGUISHENE",
    "rate": 638.25,
    "zone": "other"
  },
  {
    "city": "PERTH",
    "rate": 1237.69,
    "zone": "other"
  },
  {
    "city": "PETAWAWA",
    "rate": 1464.81,
    "zone": "other"
  },
  {
    "city": "PETERBOROUGH",
    "rate": 679.94,
    "zone": "other"
  },
  {
    "city": "PETERSBURG",
    "rate": 539.06,
    "zone": "other"
  },
  {
    "city": "PETROLIA",
    "rate": 1007.69,
    "zone": "other"
  },
  {
    "city": "PHELPSTON",
    "rate": 579.31,
    "zone": "other"
  },
  {
    "city": "PICKERING",
    "rate": 448.5,
    "zone": "other"
  },
  {
    "city": "PICKLE LAKE",
    "rate": 5458.19,
    "zone": "other"
  },
  {
    "city": "PICTON",
    "rate": 931.5,
    "zone": "other"
  },
  {
    "city": "PLAINFIELD",
    "rate": 853.88,
    "zone": "other"
  },
  {
    "city": "PLANTAGENET",
    "rate": 1716.38,
    "zone": "other"
  },
  {
    "city": "PLATTSVILLE",
    "rate": 546.25,
    "zone": "other"
  },
  {
    "city": "PLEVNA",
    "rate": 1127.0,
    "zone": "other"
  },
  {
    "city": "POINT EDWARD",
    "rate": 1030.69,
    "zone": "other"
  },
  {
    "city": "PONTYPOOL",
    "rate": 590.81,
    "zone": "other"
  },
  {
    "city": "PORCUPINE",
    "rate": 2139.0,
    "zone": "other"
  },
  {
    "city": "PORT BURWELL",
    "rate": 776.25,
    "zone": "other"
  },
  {
    "city": "PORT CARLING",
    "rate": 815.06,
    "zone": "other"
  },
  {
    "city": "PORT COLBORNE",
    "rate": 677.06,
    "zone": "other"
  },
  {
    "city": "PORT DARLINGTON",
    "rate": 556.31,
    "zone": "other"
  },
  {
    "city": "PORT DOVER",
    "rate": 638.25,
    "zone": "other"
  },
  {
    "city": "PORT ELGIN",
    "rate": 803.56,
    "zone": "other"
  },
  {
    "city": "PORT JOPE",
    "rate": 599.44,
    "zone": "other"
  },
  {
    "city": "PORT MAITLAND",
    "rate": 629.63,
    "zone": "other"
  },
  {
    "city": "PORT PERRY",
    "rate": 569.25,
    "zone": "other"
  },
  {
    "city": "PORT ROBINSON",
    "rate": 632.5,
    "zone": "other"
  },
  {
    "city": "PORT SANDFIELD",
    "rate": 806.44,
    "zone": "other"
  },
  {
    "city": "PORT SEVERN",
    "rate": 646.88,
    "zone": "other"
  },
  {
    "city": "PORT STANLEY",
    "rate": 823.69,
    "zone": "other"
  },
  {
    "city": "PORT WELLER",
    "rate": 587.94,
    "zone": "other"
  },
  {
    "city": "PORTLAND",
    "rate": 1198.88,
    "zone": "other"
  },
  {
    "city": "POWASSAN",
    "rate": 1093.94,
    "zone": "other"
  },
  {
    "city": "PRESCOTT",
    "rate": 1300.94,
    "zone": "other"
  },
  {
    "city": "PRICES CORNERS",
    "rate": 587.94,
    "zone": "other"
  },
  {
    "city": "PRINCETON",
    "rate": 587.94,
    "zone": "other"
  },
  {
    "city": "PROTON STATION",
    "rate": 556.31,
    "zone": "other"
  },
  {
    "city": "PUSLINCH",
    "rate": 454.25,
    "zone": "other"
  },
  {
    "city": "PUTNAM",
    "rate": 692.88,
    "zone": "other"
  },
  {
    "city": "QUEENSVILLE",
    "rate": 464.31,
    "zone": "other"
  },
  {
    "city": "RAVEENA",
    "rate": 713.0,
    "zone": "other"
  },
  {
    "city": "RAVENSHOE",
    "rate": 498.81,
    "zone": "other"
  },
  {
    "city": "REABORO",
    "rate": 671.31,
    "zone": "other"
  },
  {
    "city": "RED LAKE",
    "rate": 5551.63,
    "zone": "other"
  },
  {
    "city": "RED ROCK",
    "rate": 3769.13,
    "zone": "other"
  },
  {
    "city": "RENFREW",
    "rate": 1378.56,
    "zone": "other"
  },
  {
    "city": "REATOULE",
    "rate": 1160.06,
    "zone": "other"
  },
  {
    "city": "RICHMOND",
    "rate": 751.81,
    "zone": "other"
  },
  {
    "city": "RIDGETOWN",
    "rate": 964.56,
    "zone": "other"
  },
  {
    "city": "RIDGEWAY",
    "rate": 690.0,
    "zone": "other"
  },
  {
    "city": "RIPLEY",
    "rate": 851.0,
    "zone": "other"
  },
  {
    "city": "ROBLIN",
    "rate": 953.06,
    "zone": "other"
  },
  {
    "city": "ROCKLAND",
    "rate": 1648.81,
    "zone": "other"
  },
  {
    "city": "ROCKWOOD",
    "rate": 464.31,
    "zone": "other"
  },
  {
    "city": "RODNEY",
    "rate": 895.56,
    "zone": "other"
  },
  {
    "city": "ROSEMONT",
    "rate": 441.31,
    "zone": "other"
  },
  {
    "city": "ROSENEATH",
    "rate": 701.5,
    "zone": "other"
  },
  {
    "city": "ROSSEAU",
    "rate": 853.88,
    "zone": "other"
  },
  {
    "city": "ROTHSAY",
    "rate": 543.38,
    "zone": "other"
  },
  {
    "city": "RUTHERGLEN",
    "rate": 1223.31,
    "zone": "other"
  },
  {
    "city": "RUTHVEN",
    "rate": 1187.38,
    "zone": "other"
  },
  {
    "city": "SALFORD",
    "rate": 644.0,
    "zone": "other"
  },
  {
    "city": "SARNIA",
    "rate": 1027.81,
    "zone": "other"
  },
  {
    "city": "SAULT STE. MARIE",
    "rate": 2113.13,
    "zone": "other"
  },
  {
    "city": "SCARBOROUGH",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "SCHOMBERG",
    "rate": 330.63,
    "zone": "other"
  },
  {
    "city": "SCHUTT",
    "rate": 1105.44,
    "zone": "other"
  },
  {
    "city": "SCOTLAND",
    "rate": 618.13,
    "zone": "other"
  },
  {
    "city": "SEAFORTH",
    "rate": 728.81,
    "zone": "other"
  },
  {
    "city": "SEAGRAVE",
    "rate": 560.63,
    "zone": "other"
  },
  {
    "city": "SEARCHMONT",
    "rate": 2226.69,
    "zone": "other"
  },
  {
    "city": "SEBERINGVILLE",
    "rate": 610.94,
    "zone": "other"
  },
  {
    "city": "SEELEY'S BAY",
    "rate": 1112.63,
    "zone": "other"
  },
  {
    "city": "SELKIRK",
    "rate": 623.88,
    "zone": "other"
  },
  {
    "city": "SEVERN BRIDGE",
    "rate": 638.25,
    "zone": "other"
  },
  {
    "city": "SEVERN FALLS",
    "rate": 679.94,
    "zone": "other"
  },
  {
    "city": "SHABANDOWAN",
    "rate": 4197.5,
    "zone": "other"
  },
  {
    "city": "SHAKESPEARE",
    "rate": 590.81,
    "zone": "other"
  },
  {
    "city": "SHALLOW LAKE",
    "rate": 734.56,
    "zone": "other"
  },
  {
    "city": "SHANTY BAY",
    "rate": 559.19,
    "zone": "other"
  },
  {
    "city": "SHARON",
    "rate": 451.38,
    "zone": "other"
  },
  {
    "city": "SHEGUIANDAH",
    "rate": 1633.0,
    "zone": "other"
  },
  {
    "city": "SHELBURNE",
    "rate": 495.94,
    "zone": "other"
  },
  {
    "city": "SHERMAN MINE",
    "rate": 1474.88,
    "zone": "other"
  },
  {
    "city": "SHILLINGTON",
    "rate": 2025.44,
    "zone": "other"
  },
  {
    "city": "SIMCOE",
    "rate": 648.31,
    "zone": "other"
  },
  {
    "city": "SIOUX LOOKOUT",
    "rate": 5062.88,
    "zone": "other"
  },
  {
    "city": "SMITHS FALLS",
    "rate": 1279.38,
    "zone": "other"
  },
  {
    "city": "SMITHVILLE",
    "rate": 541.94,
    "zone": "other"
  },
  {
    "city": "SMOOTHROCK/FALLS",
    "rate": 2360.38,
    "zone": "other"
  },
  {
    "city": "SOMBRA",
    "rate": 1112.63,
    "zone": "other"
  },
  {
    "city": "SOUTH BAYMOUTH",
    "rate": 1105.44,
    "zone": "other"
  },
  {
    "city": "SOUTH RIVER",
    "rate": 1013.44,
    "zone": "other"
  },
  {
    "city": "SOUTHAMPTON",
    "rate": 782.0,
    "zone": "other"
  },
  {
    "city": "SOUTHWOLD",
    "rate": 787.75,
    "zone": "other"
  },
  {
    "city": "SPARTA",
    "rate": 787.75,
    "zone": "other"
  },
  {
    "city": "SPRAGEE",
    "rate": 1660.31,
    "zone": "other"
  },
  {
    "city": "SPRING BAY",
    "rate": 1762.38,
    "zone": "other"
  },
  {
    "city": "SPRINGFIELD",
    "rate": 740.31,
    "zone": "other"
  },
  {
    "city": "SPRINGFORD",
    "rate": 648.31,
    "zone": "other"
  },
  {
    "city": "ST. ALBERT",
    "rate": 1539.56,
    "zone": "other"
  },
  {
    "city": "ST. ANN'S",
    "rate": 563.5,
    "zone": "other"
  },
  {
    "city": "ST. CATHERINES",
    "rate": 579.31,
    "zone": "other"
  },
  {
    "city": "ST. CHARLES",
    "rate": 1270.75,
    "zone": "other"
  },
  {
    "city": "ST. CLEMENTS",
    "rate": 541.94,
    "zone": "other"
  },
  {
    "city": "ST. DAVID'S",
    "rate": 610.94,
    "zone": "other"
  },
  {
    "city": "ST. GEORGE",
    "rate": 575.0,
    "zone": "other"
  },
  {
    "city": "ST. ISIDORE DE PRESCOTT",
    "rate": 1618.63,
    "zone": "other"
  },
  {
    "city": "ST.  JACOBS",
    "rate": 549.13,
    "zone": "other"
  },
  {
    "city": "ST. JOSEPH",
    "rate": 863.94,
    "zone": "other"
  },
  {
    "city": "ST. JOSEPH ISLAND",
    "rate": 2028.31,
    "zone": "other"
  },
  {
    "city": "ST. MARY'S",
    "rate": 692.88,
    "zone": "other"
  },
  {
    "city": "ST. PAUL'S",
    "rate": 648.31,
    "zone": "other"
  },
  {
    "city": "ST. THOMAS",
    "rate": 794.94,
    "zone": "other"
  },
  {
    "city": "ST. WILLIAMS",
    "rate": 725.94,
    "zone": "other"
  },
  {
    "city": "STAFFA",
    "rate": 723.06,
    "zone": "other"
  },
  {
    "city": "STAPLES",
    "rate": 1141.38,
    "zone": "other"
  },
  {
    "city": "STAYNER",
    "rate": 550.56,
    "zone": "other"
  },
  {
    "city": "STEVENSVILLE",
    "rate": 671.31,
    "zone": "other"
  },
  {
    "city": "STIRLING",
    "rate": 828.0,
    "zone": "other"
  },
  {
    "city": "STONEY CREEEK",
    "rate": 501.69,
    "zone": "other"
  },
  {
    "city": "STONEY POINT",
    "rate": 1124.13,
    "zone": "other"
  },
  {
    "city": "STOUFFVILLE",
    "rate": 441.31,
    "zone": "other"
  },
  {
    "city": "STRAFFORDVILLE",
    "rate": 740.31,
    "zone": "other"
  },
  {
    "city": "STRATFORD",
    "rate": 644.0,
    "zone": "other"
  },
  {
    "city": "STRATHCONA",
    "rate": 938.69,
    "zone": "other"
  },
  {
    "city": "STRATHROY",
    "rate": 863.94,
    "zone": "other"
  },
  {
    "city": "STURGEON",
    "rate": 1276.5,
    "zone": "other"
  },
  {
    "city": "STURGEON BAY",
    "rate": 651.19,
    "zone": "other"
  },
  {
    "city": "STURGEON FALLS",
    "rate": 1282.25,
    "zone": "other"
  },
  {
    "city": "STURGEON POINT",
    "rate": 707.25,
    "zone": "other"
  },
  {
    "city": "SUDBURY",
    "rate": 1295.19,
    "zone": "other"
  },
  {
    "city": "SUGARBUSH",
    "rate": 820.81,
    "zone": "other"
  },
  {
    "city": "SUNBURY",
    "rate": 1058.0,
    "zone": "other"
  },
  {
    "city": "SUNDERLAND",
    "rate": 582.19,
    "zone": "other"
  },
  {
    "city": "SUNRIDGE",
    "rate": 989.0,
    "zone": "other"
  },
  {
    "city": "SUTTON",
    "rate": 559.19,
    "zone": "other"
  },
  {
    "city": "SWASTIKA",
    "rate": 1857.25,
    "zone": "other"
  },
  {
    "city": "TALBOTVILLE",
    "rate": 773.38,
    "zone": "other"
  },
  {
    "city": "TAMWORTH",
    "rate": 997.63,
    "zone": "other"
  },
  {
    "city": "TARA",
    "rate": 764.75,
    "zone": "other"
  },
  {
    "city": "TAVISTOCK",
    "rate": 605.19,
    "zone": "other"
  },
  {
    "city": "TECUMSEH",
    "rate": 1210.38,
    "zone": "other"
  },
  {
    "city": "TEESWATER",
    "rate": 792.06,
    "zone": "other"
  },
  {
    "city": "TEMAGAMI",
    "rate": 1447.56,
    "zone": "other"
  },
  {
    "city": "TERRA COTTA",
    "rate": 330.63,
    "zone": "other"
  },
  {
    "city": "TERRACE BAY",
    "rate": 3448.56,
    "zone": "other"
  },
  {
    "city": "THAMESFORD",
    "rate": 665.56,
    "zone": "other"
  },
  {
    "city": "THAMESVILLE",
    "rate": 955.94,
    "zone": "other"
  },
  {
    "city": "THEDFORD",
    "rate": 961.69,
    "zone": "other"
  },
  {
    "city": "THESSALON",
    "rate": 1873.06,
    "zone": "other"
  },
  {
    "city": "THORNBURY",
    "rate": 698.63,
    "zone": "other"
  },
  {
    "city": "THORNDALE",
    "rate": 684.25,
    "zone": "other"
  },
  {
    "city": "THORNHILL",
    "rate": 330.63,
    "zone": "other"
  },
  {
    "city": "THORNTON",
    "rate": 498.81,
    "zone": "other"
  },
  {
    "city": "THOROLD",
    "rate": 608.06,
    "zone": "other"
  },
  {
    "city": "THUNDER BAY",
    "rate": 4029.31,
    "zone": "other"
  },
  {
    "city": "TILBURY",
    "rate": 1105.44,
    "zone": "other"
  },
  {
    "city": "TILDEN LAKE",
    "rate": 1276.5,
    "zone": "other"
  },
  {
    "city": "TILLSON BURG",
    "rate": 701.5,
    "zone": "other"
  },
  {
    "city": "TIMMIS",
    "rate": 2139.0,
    "zone": "other"
  },
  {
    "city": "TIVERTON",
    "rate": 884.06,
    "zone": "other"
  },
  {
    "city": "TOTTENHAM",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "TRENTON",
    "rate": 773.38,
    "zone": "other"
  },
  {
    "city": "TROUT CREEK",
    "rate": 1060.88,
    "zone": "other"
  },
  {
    "city": "TROY",
    "rate": 533.31,
    "zone": "other"
  },
  {
    "city": "TUPPERVILLE",
    "rate": 1016.31,
    "zone": "other"
  },
  {
    "city": "TWEED",
    "rate": 914.25,
    "zone": "other"
  },
  {
    "city": "UNIONVILLE",
    "rate": 388.13,
    "zone": "other"
  },
  {
    "city": "UPSALA",
    "rate": 4371.44,
    "zone": "other"
  },
  {
    "city": "UTOPIA",
    "rate": 575.0,
    "zone": "other"
  },
  {
    "city": "UXBRIDGE",
    "rate": 540.5,
    "zone": "other"
  },
  {
    "city": "VAL CARON",
    "rate": 1339.75,
    "zone": "other"
  },
  {
    "city": "VANDORF",
    "rate": 457.13,
    "zone": "other"
  },
  {
    "city": "VANESSA",
    "rate": 638.25,
    "zone": "other"
  },
  {
    "city": "VARS",
    "rate": 1638.75,
    "zone": "other"
  },
  {
    "city": "VERMILLION BAY",
    "rate": 5090.19,
    "zone": "other"
  },
  {
    "city": "VERNER",
    "rate": 1328.25,
    "zone": "other"
  },
  {
    "city": "VIENNA",
    "rate": 754.69,
    "zone": "other"
  },
  {
    "city": "VINCELAND",
    "rate": 552.0,
    "zone": "other"
  },
  {
    "city": "VIRGIL",
    "rate": 618.13,
    "zone": "other"
  },
  {
    "city": "VIRGINIATOWN",
    "rate": 1851.5,
    "zone": "other"
  },
  {
    "city": "WAINFLEET",
    "rate": 623.88,
    "zone": "other"
  },
  {
    "city": "WALKERTON",
    "rate": 728.81,
    "zone": "other"
  },
  {
    "city": "WALKERVILLE",
    "rate": 1229.06,
    "zone": "other"
  },
  {
    "city": "WALLACEBURG",
    "rate": 1102.56,
    "zone": "other"
  },
  {
    "city": "WALLENSTEIN",
    "rate": 575.0,
    "zone": "other"
  },
  {
    "city": "WALTON",
    "rate": 776.25,
    "zone": "other"
  },
  {
    "city": "WARDSVILLE",
    "rate": 892.69,
    "zone": "other"
  },
  {
    "city": "WAR KWORTH",
    "rate": 756.13,
    "zone": "other"
  },
  {
    "city": "WARREN",
    "rate": 1303.81,
    "zone": "other"
  },
  {
    "city": "WASAGA BEACH",
    "rate": 596.56,
    "zone": "other"
  },
  {
    "city": "WASHAGO",
    "rate": 641.13,
    "zone": "other"
  },
  {
    "city": "WATERDOWN",
    "rate": 493.06,
    "zone": "other"
  },
  {
    "city": "WATERFORD",
    "rate": 629.63,
    "zone": "other"
  },
  {
    "city": "WATERLOO",
    "rate": 562.06,
    "zone": "other"
  },
  {
    "city": "WATFORD",
    "rate": 911.38,
    "zone": "other"
  },
  {
    "city": "WAUBAUSHENE",
    "rate": 629.63,
    "zone": "other"
  },
  {
    "city": "WAUPOOS ISL. PRINCE EDWARD",
    "rate": 967.44,
    "zone": "other"
  },
  {
    "city": "WAVERLEY",
    "rate": 585.06,
    "zone": "other"
  },
  {
    "city": "WAVA",
    "rate": 2729.81,
    "zone": "other"
  },
  {
    "city": "WEBBWOOD",
    "rate": 1489.25,
    "zone": "other"
  },
  {
    "city": "WELLAND",
    "rate": 641.13,
    "zone": "other"
  },
  {
    "city": "WELLANDPORT",
    "rate": 577.88,
    "zone": "other"
  },
  {
    "city": "WELLBURN",
    "rate": 695.75,
    "zone": "other"
  },
  {
    "city": "WELLESLEY",
    "rate": 585.06,
    "zone": "other"
  },
  {
    "city": "WELLINGTON",
    "rate": 914.25,
    "zone": "other"
  },
  {
    "city": "WEST BAY M'CHINEENG",
    "rate": 1702.0,
    "zone": "other"
  },
  {
    "city": "WEST LORNE",
    "rate": 869.69,
    "zone": "other"
  },
  {
    "city": "WHEALTLEY",
    "rate": 1129.88,
    "zone": "other"
  },
  {
    "city": "WHITBY",
    "rate": 483.0,
    "zone": "other"
  },
  {
    "city": "WHITECHURCH",
    "rate": 770.5,
    "zone": "other"
  },
  {
    "city": "WHITEVALE",
    "rate": 454.25,
    "zone": "other"
  },
  {
    "city": "WHITNEY",
    "rate": 1129.88,
    "zone": "other"
  },
  {
    "city": "WIARTON",
    "rate": 782.0,
    "zone": "other"
  },
  {
    "city": "WILBERFORCE",
    "rate": 980.38,
    "zone": "other"
  },
  {
    "city": "WILKES PORT",
    "rate": 1085.31,
    "zone": "other"
  },
  {
    "city": "WILLIAMSBURG",
    "rate": 1417.38,
    "zone": "other"
  },
  {
    "city": "WILLIAMTOWN",
    "rate": 1561.13,
    "zone": "other"
  },
  {
    "city": "WILSONVILLE",
    "rate": 638.25,
    "zone": "other"
  },
  {
    "city": "WINCHESTER",
    "rate": 1453.31,
    "zone": "other"
  },
  {
    "city": "WINDERMERE",
    "rate": 826.56,
    "zone": "other"
  },
  {
    "city": "WINDHAM CENTER",
    "rate": 651.19,
    "zone": "other"
  },
  {
    "city": "WINDSOR",
    "rate": 1237.69,
    "zone": "other"
  },
  {
    "city": "WINGHAM",
    "rate": 770.5,
    "zone": "other"
  },
  {
    "city": "WINONA",
    "rate": 527.56,
    "zone": "other"
  },
  {
    "city": "WOODHAM",
    "rate": 715.88,
    "zone": "other"
  },
  {
    "city": "WOODSTOCK",
    "rate": 629.63,
    "zone": "other"
  },
  {
    "city": "WOODVILLE",
    "rate": 638.25,
    "zone": "other"
  },
  {
    "city": "WORTHINGTON",
    "rate": 1392.94,
    "zone": "other"
  },
  {
    "city": "WROXETER",
    "rate": 632.5,
    "zone": "other"
  },
  {
    "city": "WYEBRIDGE",
    "rate": 608.06,
    "zone": "other"
  },
  {
    "city": "WYEVALE",
    "rate": 579.31,
    "zone": "other"
  },
  {
    "city": "WYOMING",
    "rate": 964.56,
    "zone": "other"
  },
  {
    "city": "YARKER",
    "rate": 971.75,
    "zone": "other"
  },
  {
    "city": "YOUNGS POINT",
    "rate": 756.13,
    "zone": "other"
  },
  {
    "city": "ZEPHYR",
    "rate": 517.5,
    "zone": "other"
  },
  {
    "city": "ZURICH",
    "rate": 809.31,
    "zone": "other"
  }
];