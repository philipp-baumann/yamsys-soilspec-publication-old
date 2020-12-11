pkgs <- c("drake", "tidyverse", "here", "simplerspec", "doFuture", "data.table")
purrr::walk(pkgs, library, character.only = TRUE)

files_funs <- c(
  here("R", "utils-misc.R"),
  here("R", "utils-graph.R"),
  here("R", "utils-model-results.R"),
  here("R", "vip-wrappers.R")
)

walk(files_funs, source)

files <- c(
  "10_compile-ref-data.R",
  "11_summarize-ref-data.R",
  "12_create-sampling-maps.R",
  "20_build-spc-models.R",
  "21_evaluate-spc-models-graphically.R",
  "22_interpret-spc-models-vip"
)