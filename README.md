# Overview

This repository contains all reference soil analysis and spectral data data,
metadata, code and text to reproduce the reference models and the manuscript for
the soil spectral library that was created in order to predict soil-fertility
related properties in four landscapes across the West African yam belt. Two of
the sampled landscapes, covering 20 fields within an area of about 10 times 10
square kilometers each, are in Côte d'Ivoire, named "Liliyo" and  "Tieningboué",
and two in Burkina Faso, named "Midebdo" and "Léo".

All analyses in this project were conducted within the [R software environment for statistical computing](https://www.r-project.org), R version 3.4.2 (2017-09-28).

The spectroscopic model library presented in this manuscript is built upon the [`simplerspec`](https://github.com/philipp-baumann/simplerspec) R package, a framework that aims to
streamline data processing and modeling for infrared diffuse reflectance spectroscopy applications.


# Project directory structure and important files

Below is a short overview of how folders and files are organized. The project
root folder (`./`) contains every file necessary to run the analysis and produce
the manuscript including table and figure outputs.

```
.
├── 10_aggregate-ref-data.R
├── 11_summarize-ref-data.R
├── 12_create-sampling-maps.R
├── 20_build-spectroscopy-models.R
├── 21_evaluate-accurate-models.R
├── 22_interpret-spc-models-vip.R
├── LICENSE
├── README.md
├── data
│   ├── metadata-field
│   ├── soilchem
│   └── spectra
├── manuscript
│   ├── figs
├── models
│   └── rep-kfold-cv
├── out
│   ├── data
│   └── figs
└── yamsys-soilspec-publication.Rproj
```

Here is a short description of key files contained in sub-folders of the
project main directory:

| Folder path | File | Description |
| -------- | -------------------- | --------------------------------------- |
| `./` | `...` | Project root directory |
| `./` | `10_aggregate-ref-data.R` | Aggregate chemical reference analysis data prior to developing spectroscopic reference models for the YAMSYS pilot landscapes. |
| `./` | `11_summarize-ref-data.R` | Summarize chemical reference analysis data using boxplots by soil property and landscape. |
| `./` | `12_create-sampling-maps.R` | Create geographical maps that depict positions of sampled fields within the four pilot landscapes.
| `./` | `20_build-spectroscopy-models.R`| Build spectroscopic reference models covering sampled fields within the four YAMSYS pilot landscapes. Tune PLS regression models using repeated ten-fold cross-validation, and derive final models at optimal number of components, develop one final model for each soil property. |
| `./` |  `21_evaluate-accurate-models.R` | Make model evaluation summary (predicted vs. observed) plots for most accurate models with RPD higher than 2 (R-squared higher than 0.75). |
| `./` |  `22_interpret-spc-models-vip.R` | Compute and plot Variable Importance in the Projection (VIP) scores of PLS regression models for total soil C, total N and clay content, including overlaid raw and preprocessed spectra. |
| `./data/` | ... | Contains all input data required for data transformation, analysis and modeling within the R environment for statistical computing. |
| `./data/metadata-field/` | `metadata-field-yamsys.csv` | Contains metadata about sampled yam fields as `.csv` text file. |
| `./data/soilchem/` | `metadata_soilchem_yamsys.txt` | Metadata about the laboratory reference data set in `./data/soilchem/soilchem_yamsys.csv`. Description of column names in header (IDs, covariates and soil properties) and details about the laboratory reference analyses. Simple text file.
| `./data/soilchem/` | `soilchem_yamsys.csv` | Soil chemical reference data set as `.csv` text file.
| `.data/spectra/` | `<sample_id>.<spc_rep_number>` | Bruker OPUS binary spectrometer files containing all spectral information. File extensions, `<spc_rep_numbers>`, are sequentially by `<sample_id>` numbered integers, starting with `0`, and representing replicate spectroscopic measurements of a sample. Bruker OPUS files contain the entire set of measurement parameters and all saved spectra of different types, for this project sample mid-infrared reflectance spectra, reference (KBr) reflectance spectra, non-atmospherically (CO<sub>2</sub>, water absorption bands) corrected spectra, and final atmospherically corrected spectra. The binary files are read using [this file reader function](https://github.com/philipp-baumann/simplerspec/blob/master/R/read-opus-universal.R) available in the [simplerspec](https://github.com/philipp-baumann/simplerspec) R package. |
| `./manuscript/` | `...` | Contains all files to re-create the manuscript of the publication on the YAMSYS soil spectroscopy reference library. Reproducibilty of text and results is achieved by combining GNU make, R Markdown and LaTex.
| `./models/rep-kfold-cv` | `pls_<soil_property>.Rds` | Contains R model outputs from all developed PLS regression models. The `.Rds` files are a binary representation of R list output from `simplerspec::fit_pls()` and i.e. contain list element `model`, which contains the `caret::train()` output that can for example be used to make predictions from new spectra using the calibration models developed in this spectral library. The custom function `simplerspec::predict_from_spc()` can e.g. be used to return predictions from multiple soil property spectroscopic models in the form of tidy data frames, including metadata such as `sample_id` or `unique_id` (`sample_id` combined with measurement date and time). |
| `./out` | `...` | Contains miscellaneous file outputs of intermediary processed data and figures that are generated from code in primary R scripts located in `./`. |
| `./out/data/` | `spec_chem.Rds` | Tibble data frame containing the following columns for each replicate spectrum (row): measurement IDs (columns `unique_id`, `file_id`, `sample_id`); spectral metadata (list-column column `metadata`; list of tibble data frames); raw, resampled and preprocessed spectral data as lists of `data.tables` (list-columns `spc`, `spc_rs` and `spc_pre`); wavenumber vectors of raw, resampled and preprocessed spectra (list-columns `wavenumbers`, `wavenumbers_rs` and `xvalues_pre`). |
| `./out/figs/` | `.pdf` | Figure output for the manuscript, the same duplicate files are also generated within `./manuscript/figs/`, but here named verbosely instead of following figure naming submission requirements of the journal. |
| `./` |  `.Rproj` | RStudio project file that can be used as a shortcut for opening the project directly from the file system. Double-clicking this file after downloading, the entire self-contained project will open RStudio and automatically set the R working directory to the project root. This avoids hard-coding file paths beneath the project directory hierarchy within all R scripts, thereby facilitating code transfer for spectroscopic models and reproducibility. See [here](https://support.rstudio.com/hc/en-us/articles/200526207-Using-Projects) for details. |

# R session info

Below is the R `sessionInfo()` output after loading required packages ([tidyverse collection of packages](https://www.tidyverse.org) and [simplerspec](https://github.com/philipp-baumann/simplerspec)) with `library()`.
This was the computational environment based on which the analysis of this project was conduced and reported accordingly in the manuscript.

```
\> sessionInfo()
R version 3.4.2 (2017-09-28)
Platform: x86_64-apple-darwin15.6.0 (64-bit)
Running under: OS X El Capitan 10.11.6

Matrix products: default
BLAS: /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libBLAS.dylib
LAPACK: /Library/Frameworks/R.framework/Versions/3.4/Resources/lib/libRlapack.dylib

locale:
[1] en_US.UTF-8/en_US.UTF-8/en_US.UTF-8/C/en_US.UTF-8/en_US.UTF-8

attached base packages:
[1] stats     graphics  grDevices utils     datasets  methods   base     

other attached packages:
 [1] forcats_0.2.0     stringr_1.2.0     dplyr_0.7.4       purrr_0.2.4      
 [5] readr_1.1.1       tidyr_0.7.2       tibble_1.3.4      ggplot2_2.2.1    
 [9] tidyverse_1.2.1   simplerspec_0.1.0 foreach_1.4.4    

loaded via a namespace (and not attached):
 [1] Rcpp_0.12.14        cellranger_1.1.0    compiler_3.4.2      plyr_1.8.4         
 [5] bindr_0.1           iterators_1.0.9     tools_3.4.2         digest_0.6.12      
 [9] lubridate_1.7.1     jsonlite_1.5        evaluate_0.10.1     nlme_3.1-131       
[13] gtable_0.2.0        lattice_0.20-35     pkgconfig_2.0.1     rlang_0.1.6        
[17] psych_1.7.8         cli_1.0.0           rstudioapi_0.7      yaml_2.1.15        
[21] parallel_3.4.2      haven_1.1.0         bindrcpp_0.2        xml2_1.1.1         
[25] httr_1.3.1          knitr_1.17          hms_0.4.0           rprojroot_1.2      
[29] grid_3.4.2          glue_1.2.0          data.table_1.10.4-3 R6_2.2.2           
[33] readxl_1.0.0        foreign_0.8-69      rmarkdown_1.8       modelr_0.1.1       
[37] reshape2_1.4.3      magrittr_1.5        scales_0.5.0        backports_1.1.1    
[41] codetools_0.2-15    htmltools_0.3.6     rvest_0.3.2         assertthat_0.2.0   
[45] mnormt_1.5-5        colorspace_1.3-2    stringi_1.1.6       lazyeval_0.2.1     
[49] munsell_0.4.3       broom_0.4.3         crayon_1.3.4   
```

```
`
