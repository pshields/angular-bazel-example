package(default_visibility = ["//visibility:public"])

load("@angular//:index.bzl", "ng_module")

ng_module(
    name = "foo_module",
    srcs = [
        "module.ts"
    ],
    tsconfig = "//src:tsconfig.json",
    deps = [
        "@rxjs",
        "//src/foo_module/component_a:component_a",
    ],
)
