const fakeData = [
  { id: "TU9751257134", maker: "AUDI", color: "ORANGE" },
  { id: "HT3533584137", maker: "Volvo", color: "WHITE" },
  { id: "CI3791562753", maker: "Mercedes", color: "PURPLE" },
  { id: "UA7814085699", maker: "VW", color: "BROWN" },
  { id: "XW6298789116", maker: "VW", color: "BLUE" },
  { id: "RB6488426745", maker: "Volvo", color: "GREEN" },
  { id: "VT1121083022", maker: "BMW", color: "YELLOW" },
  { id: "UQ8740528561", maker: "Porsche", color: "WHITE" },
  { id: "QD6707713628", maker: "VW", color: "BLACK" },
  { id: "NY1977654939", maker: "VW", color: "BLACK" },
  { id: "CS1592485025", maker: "Volvo", color: "PURPLE" },
  { id: "PI0338011306", maker: "Mercedes", color: "WHITE" },
  { id: "YE6677646771", maker: "Porsche", color: "YELLOW" },
  { id: "JI0761633910", maker: "Tesla", color: "GRAY" },
  { id: "NI9338201077", maker: "Porsche", color: "WHITE" },
  { id: "OV9424641888", maker: "Volvo", color: "ORANGE" },
  { id: "GK2674348314", maker: "Mercedes", color: "PINK" },
  { id: "DM0352998731", maker: "AUDI", color: "BLUE" },
  { id: "PD5061438245", maker: "VW", color: "WHITE" },
  { id: "CS1505442353", maker: "Volvo", color: "BROWN" },
  { id: "WU8344618477", maker: "VW", color: "BLACK" },
  { id: "XM4329964962", maker: "Alfa Romeo", color: "WHITE" },
  { id: "LU7147802414", maker: "BMW", color: "PINK" },
  { id: "JL7055208017", maker: "Alfa Romeo", color: "GREEN" },
  { id: "AQ9854806254", maker: "VW", color: "BLUE" },
  { id: "SX3225311852", maker: "AUDI", color: "GREEN" },
  { id: "QQ8286988849", maker: "Alfa Romeo", color: "BLACK" },
  { id: "RG2738358654", maker: "VW", color: "GRAY" },
  { id: "CP8178055029", maker: "Alfa Romeo", color: "GREEN" },
  { id: "AK2028777566", maker: "Volvo", color: "PINK" },
  { id: "FK7395666736", maker: "BMW", color: "YELLOW" },
  { id: "ME5631775088", maker: "BMW", color: "WHITE" },
  { id: "EZ1181309586", maker: "Volvo", color: "ORANGE" },
  { id: "BE2690251957", maker: "Mercedes", color: "WHITE" },
  { id: "NY7494882014", maker: "Mercedes", color: "GRAY" },
  { id: "JL1528435482", maker: "AUDI", color: "PINK" },
  { id: "UT1926327884", maker: "AUDI", color: "RED" },
  { id: "CK3536975744", maker: "Tesla", color: "BLUE" },
  { id: "KY5766197639", maker: "Mercedes", color: "ORANGE" },
  { id: "TF2816579405", maker: "Porsche", color: "BLACK" },
  { id: "IA1177160259", maker: "BMW", color: "GRAY" },
  { id: "HL0090555089", maker: "Tesla", color: "ORANGE" },
  { id: "VU7232087447", maker: "AUDI", color: "PURPLE" },
  { id: "HJ0388319749", maker: "AUDI", color: "BROWN" },
  { id: "UP0058998935", maker: "BMW", color: "BLUE" },
  { id: "XB1655062827", maker: "BMW", color: "BROWN" },
  { id: "NJ5321631804", maker: "VW", color: "YELLOW" },
  { id: "FE3105177475", maker: "BMW", color: "GREEN" },
  { id: "QV6069007963", maker: "Porsche", color: "RED" },
  { id: "YL0287369792", maker: "Volvo", color: "BROWN" },
  { id: "FR6575725025", maker: "VW", color: "PINK" },
  { id: "KZ5475259675", maker: "Volvo", color: "GRAY" },
  { id: "JJ2225367228", maker: "Volvo", color: "GRAY" },
  { id: "BS4284959175", maker: "Tesla", color: "YELLOW" },
  { id: "VF5103686611", maker: "Volvo", color: "PURPLE" },
  { id: "DT4646055923", maker: "Mercedes", color: "PINK" },
  { id: "WO0054807354", maker: "VW", color: "RED" },
  { id: "NL6489963320", maker: "Tesla", color: "RED" },
  { id: "ZU2234864419", maker: "Tesla", color: "PURPLE" },
  { id: "IZ1631353423", maker: "Alfa Romeo", color: "GREEN" },
  { id: "RQ2304390273", maker: "AUDI", color: "ORANGE" },
  { id: "SV6684805403", maker: "Porsche", color: "RED" },
  { id: "TJ8746540489", maker: "Porsche", color: "PURPLE" },
  { id: "VE3472009535", maker: "Porsche", color: "GREEN" },
  { id: "GF4415048665", maker: "Volvo", color: "PURPLE" },
  { id: "PM2926603686", maker: "AUDI", color: "BROWN" },
  { id: "TT9904663094", maker: "Mercedes", color: "BLUE" },
  { id: "HP1605430376", maker: "Mercedes", color: "BLACK" },
  { id: "RZ6510693968", maker: "Mercedes", color: "GREEN" },
  { id: "UU4710846069", maker: "VW", color: "WHITE" },
  { id: "QC0947148329", maker: "Volvo", color: "RED" },
  { id: "DU8112503757", maker: "VW", color: "PINK" },
  { id: "IK5159046311", maker: "Volvo", color: "BLACK" },
  { id: "UC6828294585", maker: "VW", color: "WHITE" },
  { id: "YS7786526508", maker: "BMW", color: "BLACK" },
  { id: "BV3767858227", maker: "AUDI", color: "PURPLE" },
  { id: "VD3382326196", maker: "VW", color: "GREEN" },
  { id: "KB0351341567", maker: "Mercedes", color: "ORANGE" },
  { id: "XV6284149820", maker: "Alfa Romeo", color: "BLUE" },
  { id: "YC5575803319", maker: "Mercedes", color: "ORANGE" },
  { id: "MV1658739942", maker: "Tesla", color: "BROWN" },
  { id: "IO1957841712", maker: "Volvo", color: "BROWN" },
  { id: "CD5192012352", maker: "Alfa Romeo", color: "ORANGE" },
  { id: "LS5622983017", maker: "BMW", color: "PURPLE" },
  { id: "FL0186016184", maker: "VW", color: "WHITE" },
  { id: "JF4781742503", maker: "Tesla", color: "ORANGE" },
  { id: "MV0167173486", maker: "AUDI", color: "BLUE" },
  { id: "VB2040663892", maker: "AUDI", color: "YELLOW" },
  { id: "HO7571642373", maker: "Tesla", color: "WHITE" },
  { id: "EF6081008416", maker: "AUDI", color: "GRAY" },
  { id: "VZ5860607603", maker: "Tesla", color: "ORANGE" },
  { id: "WO5041761955", maker: "VW", color: "RED" },
  { id: "KX3917351061", maker: "Alfa Romeo", color: "YELLOW" },
  { id: "GT1236189494", maker: "AUDI", color: "ORANGE" },
  { id: "CL4728249986", maker: "Tesla", color: "PINK" },
  { id: "IN4895684846", maker: "Tesla", color: "BROWN" },
  { id: "XQ2972666235", maker: "Alfa Romeo", color: "RED" },
  { id: "JT1019315474", maker: "Mercedes", color: "ORANGE" },
  { id: "CN8292281364", maker: "Volvo", color: "GREEN" },
  { id: "OS5734964797", maker: "AUDI", color: "BLUE" },
];

export default fakeData;
