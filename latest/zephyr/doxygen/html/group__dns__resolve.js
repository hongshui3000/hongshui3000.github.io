var group__dns__resolve =
[
    [ "dns_addrinfo", "structdns__addrinfo.html", [
      [ "ai_addr", "structdns__addrinfo.html#a254fcceb59e65cb425c19825b28c3d37", null ],
      [ "ai_addrlen", "structdns__addrinfo.html#ad70149a624f91ec49ac4121aba5d3799", null ],
      [ "ai_canonname", "structdns__addrinfo.html#a21db6675aef2f8bafb83846343eae9ce", null ],
      [ "ai_family", "structdns__addrinfo.html#af9a9458751ddb65219f3b5f6730df558", null ]
    ] ],
    [ "dns_resolve_context", "structdns__resolve__context.html", [
      [ "dns_pending_query", "structdns__resolve__context_1_1dns__pending__query.html", [
        [ "cb", "structdns__resolve__context_1_1dns__pending__query.html#aacf4003ce035658038ae44773091f2d0", null ],
        [ "ctx", "structdns__resolve__context_1_1dns__pending__query.html#a4260371a741b3c2e752848955eee5cae", null ],
        [ "id", "structdns__resolve__context_1_1dns__pending__query.html#a773e2ad2bedb2d1030df3590e9a14173", null ],
        [ "query", "structdns__resolve__context_1_1dns__pending__query.html#a106464bda8d56283b06251c37964906b", null ],
        [ "query_hash", "structdns__resolve__context_1_1dns__pending__query.html#a168fea99e8c6760cab49611ceb5a6fc1", null ],
        [ "query_type", "structdns__resolve__context_1_1dns__pending__query.html#af5796eb469e2fe3bcebea2ad55a8fd78", null ],
        [ "timeout", "structdns__resolve__context_1_1dns__pending__query.html#aa2b1f1db21ab4a05240ebb62512c24d5", null ],
        [ "timer", "structdns__resolve__context_1_1dns__pending__query.html#a6f76b200b8c421399987be83b72b9230", null ],
        [ "user_data", "structdns__resolve__context_1_1dns__pending__query.html#a6a1c93f3eab8f9aa55dbb26e704bb343", null ]
      ] ],
      [ "buf_timeout", "structdns__resolve__context.html#a402a4a2adfe3859f8dab749b44b7d8e6", null ],
      [ "dns_server", "structdns__resolve__context.html#ae54aa9bc3b76924193c0846976ee089b", null ],
      [ "is_llmnr", "structdns__resolve__context.html#a503502ac58538d54fddce34e7ae71f2e", null ],
      [ "is_mdns", "structdns__resolve__context.html#aa6c01844428450cf96c306feb35d491e", null ],
      [ "lock", "structdns__resolve__context.html#a9d1ada3ab20399f750acfee94e8e6cd7", null ],
      [ "net_ctx", "structdns__resolve__context.html#abdc166e878040d90362366251730e6df", null ],
      [ "queries", "structdns__resolve__context.html#a3bec79837b0bce3fd99b29bfbe1da40d", null ],
      [ "servers", "structdns__resolve__context.html#a57520641210a20f60aebc642dd4276a8", null ],
      [ "state", "structdns__resolve__context.html#a88f6600061cdb8e9f34802fe2a0a7d5a", null ]
    ] ],
    [ "DNS_MAX_NAME_SIZE", "group__dns__resolve.html#gaba564a71c4fb4c44fae69015e880b0db", null ],
    [ "dns_resolve_cb_t", "group__dns__resolve.html#ga79a1d3b79f665959331956c1e48b1739", null ],
    [ "dns_query_type", "group__dns__resolve.html#ga7169c5a920fb1b0d77910a6ab922e3f0", [
      [ "DNS_QUERY_TYPE_A", "group__dns__resolve.html#gga7169c5a920fb1b0d77910a6ab922e3f0a96b4b4e07f1560cd046cac010ac32134", null ],
      [ "DNS_QUERY_TYPE_AAAA", "group__dns__resolve.html#gga7169c5a920fb1b0d77910a6ab922e3f0aad661f3510af499212143370a81b9049", null ]
    ] ],
    [ "dns_resolve_context_state", "group__dns__resolve.html#gaf190da074df1b14130c0af6370bbd56c", [
      [ "DNS_RESOLVE_CONTEXT_ACTIVE", "group__dns__resolve.html#ggaf190da074df1b14130c0af6370bbd56cab4bde91ceae9786f84712e7bd20ab994", null ],
      [ "DNS_RESOLVE_CONTEXT_DEACTIVATING", "group__dns__resolve.html#ggaf190da074df1b14130c0af6370bbd56ca776ec347989a1bb2cee6242720a321fa", null ],
      [ "DNS_RESOLVE_CONTEXT_INACTIVE", "group__dns__resolve.html#ggaf190da074df1b14130c0af6370bbd56ca2ff3849fda38c36c3859b08562f35708", null ]
    ] ],
    [ "dns_resolve_status", "group__dns__resolve.html#ga5baf1fea0482fb3a940b4f5350a3c58e", [
      [ "DNS_EAI_BADFLAGS", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58ea9989bb26c930dcf90b5aaab224f19793", null ],
      [ "DNS_EAI_NONAME", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58ea7280a03e2eaec0be6ee1369c25a13d7f", null ],
      [ "DNS_EAI_AGAIN", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58ea517a9b3ce92e064eb50f40ec72e341b9", null ],
      [ "DNS_EAI_FAIL", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58ea512c526ee3142b8f00330e5009672455", null ],
      [ "DNS_EAI_NODATA", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58ea5c3e54fabe22199b2d27018ef8851fa2", null ],
      [ "DNS_EAI_FAMILY", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58ea8440de8b7109dfcca71acca6c7ac4103", null ],
      [ "DNS_EAI_SOCKTYPE", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58eaba718125a826939380fdbcc9c1fb4512", null ],
      [ "DNS_EAI_SERVICE", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58eaeb7d2677167f5bc230da2eea2a81d06c", null ],
      [ "DNS_EAI_ADDRFAMILY", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58ea4092e3cb6e36bba4ea8fce4bc0352e5d", null ],
      [ "DNS_EAI_MEMORY", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58ea23a80de9adbce595e2bf1556d92c4673", null ],
      [ "DNS_EAI_SYSTEM", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58eae932d5596c55d090cf2ebe43ad59bd35", null ],
      [ "DNS_EAI_OVERFLOW", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58ea8c1f83b2e79dbec7a3f42cc37301271f", null ],
      [ "DNS_EAI_INPROGRESS", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58ea4281a05dd374dc24758896fb8d4000f3", null ],
      [ "DNS_EAI_CANCELED", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58ea935a23488ff9e1f51f91ac3598a4cbc3", null ],
      [ "DNS_EAI_NOTCANCELED", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58ea2839d8cf68a4d668ccfdb38898a2414f", null ],
      [ "DNS_EAI_ALLDONE", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58eac9a19751ef16468e8f46b9f59bc8d836", null ],
      [ "DNS_EAI_IDN_ENCODE", "group__dns__resolve.html#gga5baf1fea0482fb3a940b4f5350a3c58ea3f7d3cecbaf3b7ca061f163f7769cda4", null ]
    ] ],
    [ "dns_cancel_addr_info", "group__dns__resolve.html#ga54ae7aaf53b36951b27f09e1cc82df55", null ],
    [ "dns_get_addr_info", "group__dns__resolve.html#gaf891d7e21bddc8fbd029209b4339c01d", null ],
    [ "dns_resolve_cancel", "group__dns__resolve.html#ga7701ddd6b6c5923f0d122a2bcf898cbf", null ],
    [ "dns_resolve_cancel_with_name", "group__dns__resolve.html#gaf2854ca9b839e7cba073e75202ac7e38", null ],
    [ "dns_resolve_close", "group__dns__resolve.html#gab04f3b2347e9c59346c10180c6c9ffbc", null ],
    [ "dns_resolve_get_default", "group__dns__resolve.html#ga3515e3ad17345880b85e64ddffc1636e", null ],
    [ "dns_resolve_init", "group__dns__resolve.html#ga74e2be49894100fe5da641331ef083de", null ],
    [ "dns_resolve_name", "group__dns__resolve.html#ga24f9bc24e2021b6b528bb15e4fcca49b", null ],
    [ "dns_resolve_reconfigure", "group__dns__resolve.html#ga9da2d7299cfafcdea7d6bfe0e4a2223c", null ]
];