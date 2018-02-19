package(default_visibility = ["//visibility:public"])

load("@angular//:index.bzl", "ng_module")
load("@io_bazel_rules_sass//sass:sass.bzl", "sass_binary")

ng_module(
    name = "component_a",
    assets = [":assets"],
    srcs = glob(['*.ts']),
    deps = ["@rxjs"],
)

sass_binary(
    name = "styles",
    src = "component.scss",
    deps = [
        "//src/shared:colors",
        "//src/shared:fonts",
    ],
)

filegroup(
    name = "assets",
    srcs = [
      ":styles",
      "component.html"
    ]
)
