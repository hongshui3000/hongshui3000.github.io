var group__modbus =
[
    [ "modbus_adu", "structmodbus__adu.html", [
      [ "crc", "structmodbus__adu.html#a78b8008e05c8d588d0ecba71e432d14e", null ],
      [ "data", "structmodbus__adu.html#a7e94e4a0557717445ab2d791f8a97b7b", null ],
      [ "fc", "structmodbus__adu.html#a015e7b842349dc5567cc51cbf1f87420", null ],
      [ "length", "structmodbus__adu.html#aa33f175677a0100c1f8a84a72c5ca247", null ],
      [ "proto_id", "structmodbus__adu.html#ae0422aacfe323ce6ca83069a54315fa0", null ],
      [ "trans_id", "structmodbus__adu.html#a04f0aa95985cc491649ba47f8ba064c8", null ],
      [ "unit_id", "structmodbus__adu.html#ab1fc3e76f3f406c8a0715055088d290d", null ]
    ] ],
    [ "modbus_user_callbacks", "structmodbus__user__callbacks.html", [
      [ "coil_rd", "structmodbus__user__callbacks.html#a3353b3aa0ec073fb9031a5c151e9995b", null ],
      [ "coil_wr", "structmodbus__user__callbacks.html#a0dad31490d8b5d454f06a8b7805a09fd", null ],
      [ "discrete_input_rd", "structmodbus__user__callbacks.html#aa6fd8fc2663c6a982ec17a162ae56961", null ],
      [ "holding_reg_rd", "structmodbus__user__callbacks.html#acf5fe90fab9765bd83d1ab2075d073a2", null ],
      [ "holding_reg_rd_fp", "structmodbus__user__callbacks.html#a821e0aacd7c90eff5e7c0047cc88a855", null ],
      [ "holding_reg_wr", "structmodbus__user__callbacks.html#a4ca1ed4bfc93b36d939f847d7ac9f8da", null ],
      [ "holding_reg_wr_fp", "structmodbus__user__callbacks.html#a333b5781c35e781e7021f53d5a357482", null ],
      [ "input_reg_rd", "structmodbus__user__callbacks.html#a91a9270bd945935b74c6f5e021429d42", null ],
      [ "input_reg_rd_fp", "structmodbus__user__callbacks.html#ae315e76c3ceefbd65ef8cea500b43df5", null ]
    ] ],
    [ "modbus_serial_param", "structmodbus__serial__param.html", [
      [ "baud", "structmodbus__serial__param.html#af3989f5e20eb96080d456114ef4d86e5", null ],
      [ "parity", "structmodbus__serial__param.html#a337a18f3ad923bf758cb432b9a2d8ada", null ]
    ] ],
    [ "modbus_server_param", "structmodbus__server__param.html", [
      [ "unit_id", "structmodbus__server__param.html#a323a3a9be08f3c77df9f06b135f7f379", null ],
      [ "user_cb", "structmodbus__server__param.html#ad8f72ea4e7dbbd81e23415e25b7d94be", null ]
    ] ],
    [ "modbus_iface_param", "structmodbus__iface__param.html", [
      [ "mode", "structmodbus__iface__param.html#ae73f218d8810afb0c2efbf865ba8b3ba", null ],
      [ "raw_tx_cb", "structmodbus__iface__param.html#aa40d3e4b974803a4ac391364e801d66b", null ],
      [ "rx_timeout", "structmodbus__iface__param.html#a7726b39e43e660adb63e24b4cf2e7ab7", null ],
      [ "serial", "structmodbus__iface__param.html#a77ff747b2e789e96691483994be1d596", null ],
      [ "server", "structmodbus__iface__param.html#a77d88f81d11b0f9338ca227930abf53d", null ]
    ] ],
    [ "MODBUS_MBAP_AND_FC_LENGTH", "group__modbus.html#gae8a6fcfc117e7c4b2ac32aef90155698", null ],
    [ "MODBUS_MBAP_LENGTH", "group__modbus.html#ga1015513d4d3b6621fc18dcfda79116a2", null ],
    [ "modbus_raw_cb_t", "group__modbus.html#ga96e98f3f98831e9cd45faf21264f8f5e", null ],
    [ "modbus_mode", "group__modbus.html#ga4bd8913e1c77a1e4b19585caa9f77c2e", [
      [ "MODBUS_MODE_RTU", "group__modbus.html#gga4bd8913e1c77a1e4b19585caa9f77c2ea52033dc2ef37fc286a590b1f97d946ef", null ],
      [ "MODBUS_MODE_ASCII", "group__modbus.html#gga4bd8913e1c77a1e4b19585caa9f77c2eafdf029741cc1bdecb2cb9baf4f06732a", null ],
      [ "MODBUS_MODE_RAW", "group__modbus.html#gga4bd8913e1c77a1e4b19585caa9f77c2ea4d05b2cfd56ccf15eb1d8c7bb71071ec", null ]
    ] ],
    [ "modbus_disable", "group__modbus.html#ga32a6319cc51eb5a98dcb58b3231b9d34", null ],
    [ "modbus_iface_get_by_name", "group__modbus.html#gaa17880a268d6b3b9553de835c800af27", null ],
    [ "modbus_init_client", "group__modbus.html#ga943eff819ecf1bc268714783047888ef", null ],
    [ "modbus_init_server", "group__modbus.html#gae4d34276c467bf54e0849a1098e56f8b", null ],
    [ "modbus_raw_backend_txn", "group__modbus.html#ga7aa5dfd6e457980e9e9b8a77810ec31e", null ],
    [ "modbus_raw_get_header", "group__modbus.html#ga333072d3536d7b6f0680ceecc2c5bddf", null ],
    [ "modbus_raw_put_header", "group__modbus.html#ga8fdae6a92e27a845296c9d8ce4b8078e", null ],
    [ "modbus_raw_set_server_failure", "group__modbus.html#gad250c40ba13a7d8c9189de17d1fd31aa", null ],
    [ "modbus_raw_submit_rx", "group__modbus.html#ga6d40e9eda6b8ead6d071d4192ffe489b", null ],
    [ "modbus_read_coils", "group__modbus.html#ga05b118dc87ebe3739cac4e9572104ffb", null ],
    [ "modbus_read_dinputs", "group__modbus.html#ga921fd6036ff1b8a416dc02e30bb6e653", null ],
    [ "modbus_read_holding_regs", "group__modbus.html#ga7d7221b32fbf2395e69e25ef2dbaa036", null ],
    [ "modbus_read_holding_regs_fp", "group__modbus.html#ga9a8ae6fb4b1aee398f5b19f074d07ea9", null ],
    [ "modbus_read_input_regs", "group__modbus.html#ga5ff31ca21cf2d1b081d172228d6c2154", null ],
    [ "modbus_request_diagnostic", "group__modbus.html#gac924251f66ca6f357d8b7d90075df210", null ],
    [ "modbus_write_coil", "group__modbus.html#gaccac4f72b5d66a5a2e6c444dda251c41", null ],
    [ "modbus_write_coils", "group__modbus.html#gac0fa22cd0d1fa861fdbc04b65ea60d7e", null ],
    [ "modbus_write_holding_reg", "group__modbus.html#gaf06d2553af8b8e9ab58f54b8b7e2055b", null ],
    [ "modbus_write_holding_regs", "group__modbus.html#gadc8273292e0efc8c0d65c00eea7a22c5", null ],
    [ "modbus_write_holding_regs_fp", "group__modbus.html#ga762da245db3ca4f60fb3aa6c5783c73d", null ]
];