package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_typescript//:defs.bzl", "ts_library")
load("@io_bazel_rules_sass//sass:sass.bzl", "sass_binary")

ts_library(
    name = "component_a",
    srcs = glob(['*.ts'])
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
