var group__ec__host__cmd__periph__interface =
[
    [ "ec_host_cmd_handler_args", "structec__host__cmd__handler__args.html", [
      [ "input_buf", "structec__host__cmd__handler__args.html#a8a9934316fa1003f327e57f00b8e3e2d", null ],
      [ "input_buf_size", "structec__host__cmd__handler__args.html#aed87e52aba8a0ac41a5e7d74e0900fdc", null ],
      [ "output_buf", "structec__host__cmd__handler__args.html#ab85a40d7156d51dec0cd8de8a64783ec", null ],
      [ "output_buf_size", "structec__host__cmd__handler__args.html#a1a6f9a7ba7faf810f7095b4c053dd3b2", null ],
      [ "version", "structec__host__cmd__handler__args.html#a420e093eeabc6e9c46cf8ea3c2010be6", null ]
    ] ],
    [ "ec_host_cmd_handler", "structec__host__cmd__handler.html", [
      [ "handler", "structec__host__cmd__handler.html#aa87d559e625871f78023fcc015a02c82", null ],
      [ "id", "structec__host__cmd__handler.html#ad0aea63728aa9254e2a14d8cf0352b87", null ],
      [ "min_rqt_size", "structec__host__cmd__handler.html#aef233f030a30032e9dcde620c1953394", null ],
      [ "min_rsp_size", "structec__host__cmd__handler.html#a4777b0c23ddf568c36ca995886cf3248", null ],
      [ "version_mask", "structec__host__cmd__handler.html#a2e4643dc7ca0ee4b8f7169b9156dadc6", null ]
    ] ],
    [ "ec_host_cmd_request_header", "structec__host__cmd__request__header.html", [
      [ "checksum", "structec__host__cmd__request__header.html#a91358051660c5fa5bab1cd61991ff6b5", null ],
      [ "cmd_id", "structec__host__cmd__request__header.html#a1b4bd2b53046e29554f27dd49eb3e807", null ],
      [ "cmd_ver", "structec__host__cmd__request__header.html#a2eb262f5fd1c7106d75feb8a5a6333a3", null ],
      [ "data_len", "structec__host__cmd__request__header.html#afedc78b6d294f73313f9eae9ecc6a03d", null ],
      [ "prtcl_ver", "structec__host__cmd__request__header.html#a2f723addb6f8aec8b2d1b02a555d7b59", null ],
      [ "reserved", "structec__host__cmd__request__header.html#ad5a54882becb66008a378be28a20dd2f", null ]
    ] ],
    [ "ec_host_cmd_response_header", "structec__host__cmd__response__header.html", [
      [ "checksum", "structec__host__cmd__response__header.html#ac77bfd822866c9f48cec249a60eaa82b", null ],
      [ "data_len", "structec__host__cmd__response__header.html#af0abf8f0d16b2089bb4f7abaac5191af", null ],
      [ "prtcl_ver", "structec__host__cmd__response__header.html#a50baff1f46f56c992194c3c244897aa8", null ],
      [ "reserved", "structec__host__cmd__response__header.html#ab45cadbdafc4ab1eb5d8b1b1db2303de", null ],
      [ "result", "structec__host__cmd__response__header.html#ab64789cfe9fc9008aa5d88182fee9885", null ]
    ] ],
    [ "EC_HOST_CMD_HANDLER", "group__ec__host__cmd__periph__interface.html#ga3c708407edb13d22843b37b3616a11d4", null ],
    [ "EC_HOST_CMD_HANDLER_UNBOUND", "group__ec__host__cmd__periph__interface.html#ga528e23189fd982e99b7228631ba3f269", null ],
    [ "ec_host_cmd_handler_cb", "group__ec__host__cmd__periph__interface.html#ga027ae23ea11a0ec7711725d1b28125d7", null ],
    [ "ec_host_cmd_status", "group__ec__host__cmd__periph__interface.html#ga9b0b87983dcc92ea55ebfa1aecf82a8f", [
      [ "EC_HOST_CMD_SUCCESS", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fa6a6e394a69d6575caf92646a63195b4e", null ],
      [ "EC_HOST_CMD_INVALID_COMMAND", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fad43b4a713754d52b77313f2222fe2432", null ],
      [ "EC_HOST_CMD_ERROR", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fa45e8b4169e1a88afcb3be1011f2da201", null ],
      [ "EC_HOST_CMD_INVALID_PARAM", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fae252c89c64d8ee5d65d7e6cf42c8fe1d", null ],
      [ "EC_HOST_CMD_ACCESS_DENIED", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fad8fef524b7ccf571f7abdf8dec56fb5c", null ],
      [ "EC_HOST_CMD_INVALID_RESPONSE", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8faff7377e35d78c46ae49085488e7e71b9", null ],
      [ "EC_HOST_CMD_INVALID_VERSION", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fa6b0ab5efe8c76a022787be84b43e1b39", null ],
      [ "EC_HOST_CMD_INVALID_CHECKSUM", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fa6ba692b3ff01ab6f382e7d5e4a7dd301", null ],
      [ "EC_HOST_CMD_IN_PROGRESS", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fa619eeb03065f2729a69c7f26c90d8c2e", null ],
      [ "EC_HOST_CMD_UNAVAILABLE", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fa75dc8b9ba661e52c48735ea85360e996", null ],
      [ "EC_HOST_CMD_TIMEOUT", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fadeacab16ecc96772c137b65352dddf26", null ],
      [ "EC_HOST_CMD_OVERFLOW", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fae62986949bad505a8be6c46d19b4e443", null ],
      [ "EC_HOST_CMD_INVALID_HEADER", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fa48a29fa396646f39c6d95f28d6ce986b", null ],
      [ "EC_HOST_CMD_REQUEST_TRUNCATED", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fa35758ca8b95b79a7c1140319164a7c00", null ],
      [ "EC_HOST_CMD_RESPONSE_TOO_BIG", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fae6cadca18d937481814ae72023d54ff5", null ],
      [ "EC_HOST_CMD_BUS_ERROR", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fadeb0f80d5150733aa4f1803ee2b19fd2", null ],
      [ "EC_HOST_CMD_BUSY", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fa20b2d8c80da5ba25bb06501eec00afa1", null ],
      [ "EC_HOST_CMD_MAX", "group__ec__host__cmd__periph__interface.html#gga9b0b87983dcc92ea55ebfa1aecf82a8fad202e5ae4fac72a7fb3d1f4a7dff3ba9", null ]
    ] ]
];