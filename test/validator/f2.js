{
   "Types-10" : {
      "pass" : {
         "test-16" : [
            [
               [
                  {}
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : [
                     "null",
                     "boolean",
                     "number",
                     "integer",
                     "string",
                     "array"
                  ]
               }
            ]
         ]
      }
   },
   "MinimumCanEqual-MaximumCanEqual-1" : {
      "fail" : {
         "test-0" : [
            [
               [
                  0
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "minimumCanEqual" : true,
                  "maximumCanEqual" : true
               }
            ]
         ]
      }
   },
   "Types-13" : {
      "pass" : {
         "test-19" : [
            [
               [
                  []
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : [
                     "string",
                     {
                        "type" : "object"
                     }
                  ]
               }
            ]
         ]
      }
   },
   "MinItemsMaxItems-1" : {
      "pass" : {
         "test-0" : [
            [
               [
                  []
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {}
            ]
         ]
      }
   },
   "Types-3" : {
      "pass" : {
         "test-2" : [
            [
               [
                  ""
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "string"
               }
            ]
         ]
      }
   },
   "Pattern-6" : {
      "fail" : {
         "test-5" : [
            [
               [
                  "aaaaa"
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "pattern" : "aa(a"
               }
            ]
         ]
      }
   },
   "MinimumCanEqual-MaximumCanEqual-4" : {
      "pass" : {
         "test-9" : [
            [
               [
                  9.9999
               ]
            ]
         ],
         "test-7" : [
            [
               [
                  1.0001
               ]
            ]
         ],
         "test-8" : [
            [
               [
                  5
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "minimum" : 1,
                  "maximum" : 10,
                  "minimumCanEqual" : false,
                  "maximumCanEqual" : false
               }
            ]
         ]
      }
   },
   "minmax-3" : {
      "pass" : {
         "test-4" : [
            [
               [
                  1
               ]
            ]
         ],
         "test-5" : [
            [
               [
                  0
               ]
            ]
         ],
         "test-6" : [
            [
               [
                  11
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "minimum" : 1,
                  "maximum" : 10
               }
            ]
         ]
      }
   },
   "Types-11" : {
      "pass" : {
         "test-17" : [
            [
               [
                  {}
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : [
                     {
                        "type" : "string"
                     },
                     {
                        "type" : "object"
                     }
                  ]
               }
            ]
         ]
      }
   },
   "AdditionalProperties-4" : {
      "pass" : {
         "test-3" : [
            [
               [
                  {
                     "c" : 3,
                     "a" : 1,
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : false,
                  "properties" : {
                     "c" : {},
                     "a" : {},
                     "b" : {}
                  }
               }
            ]
         ]
      }
   },
   "Types-9" : {
      "pass" : {
         "test-15" : [
            [
               [
                  {}
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : [
                     "null",
                     "boolean",
                     "number",
                     "integer",
                     "string",
                     "array",
                     "object"
                  ]
               }
            ]
         ]
      }
   },
   "Types-8" : {
      "pass" : {
         "test-7" : [
            [
               [
                  true
               ]
            ]
         ]
      },
      "fail" : {
         "test-9" : [
            [
               [
                  null
               ]
            ]
         ],
         "test-12" : [
            [
               [
                  0.1
               ]
            ]
         ],
         "test-10" : [
            [
               [
                  null
               ]
            ]
         ],
         "test-8" : [
            [
               [
                  null
               ]
            ]
         ],
         "test-11" : [
            [
               [
                  null
               ]
            ]
         ],
         "test-14" : [
            [
               [
                  false
               ]
            ]
         ],
         "test-13" : [
            [
               [
                  null
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "null"
               }
            ]
         ]
      }
   },
   "Pattern-1" : {
      "pass" : {
         "test-0" : [
            [
               [
                  ""
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {}
            ]
         ]
      }
   },
   "MinimumCanEqual-MaximumCanEqual-3" : {
      "pass" : {
         "test-4" : [
            [
               [
                  1
               ]
            ]
         ]
      },
      "fail" : {
         "test-5" : [
            [
               [
                  0
               ]
            ]
         ],
         "test-6" : [
            [
               [
                  11
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "minimum" : 1,
                  "maximum" : 10,
                  "minimumCanEqual" : true,
                  "maximumCanEqual" : true
               }
            ]
         ]
      }
   },
   "Requires-1" : {
      "pass" : {
         "test-0" : [
            [
               [
                  {
                     "a" : 1
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "properties" : {
                     "a" : {
                        "requires" : "a"
                     }
                  }
               }
            ]
         ]
      }
   },
   "Requires-6" : {
      "pass" : {
         "test-5" : [
            [
               [
                  {
                     "a" : 1,
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "properties" : {
                     "a" : {
                        "requires" : "b"
                     },
                     "b" : {
                        "requires" : "c"
                     }
                  }
               }
            ]
         ]
      }
   },
   "AdditionalProperties-8" : {
      "pass" : {
         "test-7" : [
            [
               [
                  {
                     "c" : 3,
                     "a" : 1,
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : false,
                  "properties" : {
                     "a" : {},
                     "b" : {}
                  }
               }
            ]
         ]
      }
   },
   "Requires-4" : {
      "pass" : {
         "test-3" : [
            [
               [
                  {
                     "a" : 1,
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "properties" : {
                     "b" : {
                        "requires" : {
                           "properties" : {
                              "a" : {
                                 "type" : "number"
                              }
                           }
                        }
                     }
                  }
               }
            ]
         ]
      }
   },
   "UniqueItems-1" : {
      "pass" : {
         "test-0" : [
            [
               [
                  []
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {}
            ]
         ]
      }
   },
   "MinItemsMaxItems-2" : {
      "pass" : {
         "test-1" : [
            [
               [
                  [
                     1
                  ]
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "maxItems" : 1,
                  "minItems" : 1
               }
            ]
         ]
      }
   },
   "Optional-1" : {
      "pass" : {
         "test-0" : [
            [
               [
                  {}
               ]
            ]
         ],
         "test-1" : [
            [
               [
                  {
                     "a" : false
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "properties" : {
                     "a" : {
                        "optional" : true
                     }
                  }
               }
            ]
         ]
      }
   },
   "AdditionalProperties-9" : {
      "pass" : {
         "test-9" : [
            [
               [
                  [
                     1,
                     2,
                     3
                  ]
               ]
            ]
         ],
         "test-10" : [
            [
               [
                  [
                     1,
                     2,
                     3
                  ]
               ]
            ]
         ],
         "test-8" : [
            [
               [
                  {
                     "c" : 3,
                     "a" : 1,
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : true
               }
            ]
         ]
      }
   },
   "Optional-2" : {
      "pass" : {
         "test-3" : [
            [
               [
                  {}
               ]
            ]
         ],
         "test-4" : [
            [
               [
                  {
                     "b" : true
                  }
               ]
            ]
         ],
         "test-2" : [
            [
               [
                  {
                     "a" : false
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "properties" : {
                     "a" : {
                        "optional" : false
                     }
                  }
               }
            ]
         ]
      }
   },
   "Types-7" : {
      "pass" : {
         "test-6" : [
            [
               [
                  null
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "null"
               }
            ]
         ]
      }
   },
   "AdditionalProperties-12" : {
      "pass" : {
         "test-14" : [
            [
               [
                  [
                     "1",
                     "2"
                  ]
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : false,
                  "items" : {
                     "type" : "string"
                  }
               }
            ]
         ]
      }
   },
   "AdditionalProperties-3" : {
      "pass" : {
         "test-2" : [
            [
               [
                  {
                     "c" : 3,
                     "a" : 1,
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : true,
                  "properties" : {
                     "a" : {},
                     "b" : {}
                  }
               }
            ]
         ]
      }
   },
   "Requires-7" : {
      "pass" : {
         "test-6" : [
            [
               [
                  {
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "properties" : {
                     "b" : {
                        "requires" : {
                           "properties" : {
                              "b" : {
                                 "type" : "string"
                              }
                           }
                        }
                     }
                  }
               }
            ]
         ]
      }
   },
   "Primitive-1" : {
      "pass" : {
         "test-0" : [
            [
               [
                  "{}"
               ]
            ]
         ],
         "test-3" : [
            [
               [
                  0
               ]
            ]
         ],
         "test-4" : [
            [
               [
                  false
               ]
            ]
         ],
         "test-1" : [
            [
               [
                  []
               ]
            ]
         ],
         "test-2" : [
            [
               [
                  ""
               ]
            ]
         ],
         "test-5" : [
            [
               [
                  null
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {}
            ]
         ]
      }
   },
   "MinItemsMaxItems-3" : {
      "pass" : {
         "test-3" : [
            [
               [
                  [
                     1,
                     2
                  ]
               ]
            ]
         ],
         "test-4" : [
            [
               [
                  [
                     1,
                     2,
                     3
                  ]
               ]
            ]
         ],
         "test-2" : [
            [
               [
                  [
                     1
                  ]
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "maxItems" : 3,
                  "minItems" : 1
               }
            ]
         ]
      }
   },
   "Optional-3" : {
      "pass" : {
         "test-5" : [
            [
               [
                  {
                     "b" : true
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "properties" : {
                     "a" : {}
                  }
               }
            ]
         ]
      }
   },
   "AdditionalProperties-2" : {
      "pass" : {
         "test-1" : [
            [
               [
                  {
                     "c" : 3,
                     "a" : 1,
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : true
               }
            ]
         ]
      }
   },
   "UniqueItems-2" : {
      "pass" : {
         "test-7" : [
            [
               [
                  [
                     {},
                     {}
                  ]
               ]
            ]
         ],
         "test-10" : [
            [
               [
                  [
                     1,
                     2,
                     1
                  ]
               ]
            ]
         ],
         "test-1" : [
            [
               [
                  []
               ]
            ]
         ],
         "test-2" : [
            [
               [
                  [
                     null
                  ]
               ]
            ]
         ],
         "test-5" : [
            [
               [
                  [
                     "a",
                     "b"
                  ]
               ]
            ]
         ],
         "test-3" : [
            [
               [
                  [
                     true,
                     false
                  ]
               ]
            ]
         ],
         "test-4" : [
            [
               [
                  [
                     1,
                     2,
                     3
                  ]
               ]
            ]
         ],
         "test-11" : [
            [
               [
                  [
                     "a",
                     "b",
                     "b"
                  ]
               ]
            ]
         ],
         "test-6" : [
            [
               [
                  [
                     [],
                     []
                  ]
               ]
            ]
         ]
      },
      "fail" : {
         "test-9" : [
            [
               [
                  [
                     false,
                     false
                  ]
               ]
            ]
         ],
         "test-8" : [
            [
               [
                  [
                     null,
                     null
                  ]
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "uniqueItems" : true
               }
            ]
         ]
      }
   },
   "Types-1" : {
      "pass" : {
         "test-0" : [
            [
               [
                  {}
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "object"
               }
            ]
         ]
      }
   },
   "Types-2" : {
      "pass" : {
         "test-1" : [
            [
               [
                  []
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "array"
               }
            ]
         ]
      }
   },
   "Pattern-2" : {
      "pass" : {
         "test-1" : [
            [
               [
                  ""
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "pattern" : "^$"
               }
            ]
         ]
      }
   },
   "AdditionalProperties-14" : {
      "pass" : {
         "test-16" : [
            [
               [
                  [
                     "1",
                     "2",
                     3
                  ]
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : {
                     "type" : "number"
                  },
                  "items" : [
                     {
                        "type" : "string"
                     },
                     {
                        "type" : "string"
                     }
                  ]
               }
            ]
         ]
      }
   },
   "AdditionalProperties-15" : {
      "pass" : {
         "test-17" : [
            [
               [
                  [
                     "1",
                     "2",
                     "3"
                  ]
               ]
            ]
         ]
      },
      "fail" : {
         "test-18" : [
            [
               [
                  [
                     "1",
                     "2",
                     "3"
                  ]
               ]
            ]
         ],
         "test-19" : [
            [
               [
                  [
                     "1",
                     "2",
                     "3"
                  ]
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : {
                     "type" : "number"
                  },
                  "items" : [
                     {
                        "type" : "string"
                     },
                     {
                        "type" : "string"
                     }
                  ]
               }
            ]
         ]
      }
   },
   "Items-1" : {
      "pass" : {
         "test-0" : [
            [
               [
                  []
               ]
            ]
         ],
         "test-1" : [
            [
               [
                  [
                     "foo"
                  ]
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "array",
                  "items" : {
                     "type" : "string"
                  }
               }
            ]
         ]
      }
   },
   "Pattern-5" : {
      "fail" : {
         "test-4" : [
            [
               [
                  "today"
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "pattern" : "dam"
               }
            ]
         ]
      }
   },
   "Types-5" : {
      "pass" : {
         "test-4" : [
            [
               [
                  0
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "integer"
               }
            ]
         ]
      }
   },
   "Pattern-4" : {
      "fail" : {
         "test-3" : [
            [
               [
                  ""
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "pattern" : "^ $"
               }
            ]
         ]
      }
   },
   "AdditionalProperties-1" : {
      "pass" : {
         "test-0" : [
            [
               [
                  {
                     "c" : 3,
                     "a" : 1,
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {}
            ]
         ]
      }
   },
   "Types-6" : {
      "pass" : {
         "test-5" : [
            [
               [
                  false
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "boolean"
               }
            ]
         ]
      }
   },
   "AdditionalProperties-13" : {
      "pass" : {
         "test-15" : [
            [
               [
                  [
                     "1",
                     "2"
                  ]
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : false,
                  "items" : [
                     {
                        "type" : "string"
                     },
                     {
                        "type" : "string"
                     }
                  ]
               }
            ]
         ]
      }
   },
   "Requires-3" : {
      "pass" : {
         "test-2" : [
            [
               [
                  {
                     "a" : 1,
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "properties" : {
                     "a" : {
                        "requires" : "b"
                     },
                     "b" : {
                        "requires" : "a"
                     }
                  }
               }
            ]
         ]
      }
   },
   "Requires-5" : {
      "pass" : {
         "test-4" : [
            [
               [
                  {
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "properties" : {
                     "b" : {
                        "requires" : "a"
                     }
                  }
               }
            ]
         ]
      }
   },
   "MinItemsMaxItems-4" : {
      "fail" : {
         "test-7" : [
            [
               [
                  [
                     1,
                     2,
                     3,
                     4
                  ]
               ]
            ]
         ],
         "test-5" : [
            [
               [
                  []
               ]
            ]
         ],
         "test-6" : [
            [
               [
                  []
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "maxItems" : 3,
                  "minItems" : 1
               }
            ]
         ]
      }
   },
   "AdditionalProperties-5" : {
      "pass" : {
         "test-4" : [
            [
               [
                  {
                     "c" : 3,
                     "a" : 1,
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : {
                     "type" : "number"
                  }
               }
            ]
         ]
      }
   },
   "AdditionalProperties-10" : {
      "pass" : {
         "test-12" : [
            [
               [
                  [
                     1,
                     2,
                     3
                  ]
               ]
            ]
         ],
         "test-11" : [
            [
               [
                  [
                     1,
                     2,
                     3
                  ]
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : {
                     "type" : "number"
                  }
               }
            ]
         ]
      }
   },
   "minmax-2" : {
      "pass" : {
         "test-3" : [
            [
               [
                  10
               ]
            ]
         ],
         "test-1" : [
            [
               [
                  1
               ]
            ]
         ],
         "test-2" : [
            [
               [
                  5
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "minimum" : 1,
                  "maximum" : 10
               }
            ]
         ]
      }
   },
   "Items-2" : {
      "pass" : {
         "test-2" : [
            [
               [
                  [
                     "foo",
                     2
                  ]
               ]
            ]
         ]
      },
      "fail" : {
         "test-3" : [
            [
               [
                  [
                     1
                  ]
               ]
            ]
         ],
         "test-4" : [
            [
               [
                  [
                     "foo",
                     "two"
                  ]
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "array",
                  "items" : [
                     {
                        "type" : "string"
                     },
                     {
                        "type" : "number"
                     }
                  ]
               }
            ]
         ]
      }
   },
   "AdditionalProperties-7" : {
      "pass" : {
         "test-6" : [
            [
               [
                  {
                     "c" : 3,
                     "a" : 1,
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : {
                     "type" : "string"
                  },
                  "properties" : {
                     "c" : {},
                     "a" : {},
                     "b" : {}
                  }
               }
            ]
         ]
      }
   },
   "Types-12" : {
      "pass" : {
         "test-18" : [
            [
               [
                  55
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : [
                     {
                        "type" : "string"
                     },
                     {
                        "type" : "object"
                     },
                     "number"
                  ]
               }
            ]
         ]
      }
   },
   "MinimumCanEqual-MaximumCanEqual-2" : {
      "pass" : {
         "test-3" : [
            [
               [
                  10
               ]
            ]
         ],
         "test-1" : [
            [
               [
                  1
               ]
            ]
         ],
         "test-2" : [
            [
               [
                  5
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "minimum" : 1,
                  "maximum" : 10,
                  "minimumCanEqual" : true,
                  "maximumCanEqual" : true
               }
            ]
         ]
      }
   },
   "AdditionalProperties-6" : {
      "pass" : {
         "test-5" : [
            [
               [
                  {
                     "c" : 3,
                     "a" : 1,
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : {
                     "type" : "number"
                  },
                  "properties" : {
                     "a" : {},
                     "b" : {}
                  }
               }
            ]
         ]
      }
   },
   "AdditionalProperties-11" : {
      "pass" : {
         "test-13" : [
            [
               [
                  [
                     1,
                     2,
                     3
                  ]
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "additionalProperties" : {
                     "type" : "string"
                  }
               }
            ]
         ]
      }
   },
   "Properties-2" : {
      "pass" : {
         "test-1" : [
            [
               [
                  {
                     "a" : 1
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "object",
                  "properties" : {
                     "a" : {}
                  }
               }
            ]
         ]
      }
   },
   "Properties-3" : {
      "pass" : {
         "test-2" : [
            [
               [
                  {
                     "a" : 1
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "object",
                  "properties" : {
                     "a" : {
                        "type" : "number"
                     }
                  }
               }
            ]
         ]
      }
   },
   "minmax-1" : {
      "pass" : {
         "test-0" : [
            [
               [
                  0
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {}
            ]
         ]
      }
   },
   "Pattern-3" : {
      "pass" : {
         "test-2" : [
            [
               [
                  "today"
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "pattern" : "day"
               }
            ]
         ]
      }
   },
   "Properties-4" : {
      "pass" : {
         "test-3" : [
            [
               [
                  {
                     "a" : {
                        "b" : "two"
                     }
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "object",
                  "properties" : {
                     "a" : {
                        "type" : "object",
                        "properties" : {
                           "b" : {
                              "type" : "string"
                           }
                        }
                     }
                  }
               }
            ]
         ]
      }
   },
   "Requires-2" : {
      "pass" : {
         "test-1" : [
            [
               [
                  {
                     "a" : 1,
                     "b" : 2
                  }
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "properties" : {
                     "a" : {},
                     "b" : {
                        "requires" : "a"
                     }
                  }
               }
            ]
         ]
      }
   },
   "Properties-1" : {
      "pass" : {
         "test-0" : [
            [
               [
                  {}
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "object",
                  "properties" : {}
               }
            ]
         ]
      }
   },
   "Types-4" : {
      "pass" : {
         "test-3" : [
            [
               [
                  0
               ]
            ]
         ]
      },
      "schema" : {
         "json" : [
            [
               {
                  "type" : "number"
               }
            ]
         ]
      }
   }
}
