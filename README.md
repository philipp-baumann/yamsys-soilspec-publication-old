# Overview

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.1174869.svg)](https://doi.org/10.5281/zenodo.1174869)

This repository contains all reference soil chemical and spectral data, metadata, code and text to reproduce the 
calibration models and the manuscript for the soil spectral library that was 
created in order to assess soil-fertility related properties in four landscapes
across the West African yam belt. The study related to this repository was conducted within the [YAMSYS project](http://www.yamsys.org), and aimed to deliver a spectroscopy library that allows to cost-effectively evaluate current soil status and effects of innovative agronomic yam practices on key soil properties. Two of
the sampled landscapes, covering 20 fields within an area of about 10 times 10 square kilometers each, are in Côte d'Ivoire, named Liliyo and
Tieningboué, and two in Burkina Faso, named Midebdo and Léo.

All analyses in this project were conducted within the [R software environment for statistical computing](https://www.r-project.org), R version 3.4.2 (2017-09-28). 

The spectroscopic model library presented in this manuscript is built upon the [`simplerspec`](https://github.com/philipp-baumann/simplerspec) R package, a framework that aims to
streamline data processing and modeling for infrared diffuse reflectance spectroscopy applications.


# Project directory structure and important files

Below is a short overview of how folders and files are organized. The project
root folder (`./`) contains every file necessary to run the analysis and produce
the manuscript including table and figure outputs.

```
.
├── 10_compile-ref-data.R
├── 11_summarize-ref-data.R
├── 12_create-sampling-maps.R
├── 20_build-spc-models.R
├── 21_evaluate-spc-models-graphically.R
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
| `./` | [`10_compile-ref-data.R`](10_compile-ref-data.R) | Compile chemical reference analysis data prior to developing spectroscopic reference models for the YAMSYS pilot landscapes. |
| `./` | [`11_summarize-ref-data.R`](11_summarize-ref-data.R) | Summarize chemical reference analysis data using boxplots by soil property and landscape. |
| `./` | [`12_create-sampling-maps.R`](12_create-sampling-maps.R) | Create geographical maps that depict positions of sampled fields within the four pilot landscapes.
| `./` | [`20_build-spc-models.R`](20_build-spc-models.R) | Build spectroscopic reference models covering sampled fields within the four YAMSYS pilot landscapes. Tune PLS regression models using 5 times repeated 10-fold cross-validation, and derive final models at optimal number of components, develop one final model for each soil property. |
| `./` |  [`21_evaluate-spc-models-graphically.R`](21_evaluate-spc-models-graphically.R) | Make model evaluation summary (predicted vs. observed) plots for models with RPD higher than 2 (R-squared higher than 0.75). |
| `./` |  [`22_interpret-spc-models-vip.R`](22_interpret-spc-models-vip.R) | Compute and plot Variable Importance in the Projection (VIP) scores of PLS regression models for total soil C, total N and clay content, including overlaid raw and preprocessed spectra. |
| [`./data/`](data) | ... | Contains all input data required for data transformation, analysis and modeling within the R environment for statistical computing. |
| [`./data/metadata-field/`](data/metadata-field) | [`metadata-field-yamsys.csv`](data/metadata-field/metadata-field-yamsys.csv) | Contains metadata about sampled yam fields as `.csv` text file. |
| [`./data/soilchem/`](data/soilchem) | [`metadata_soilchem_yamsys.txt`](data/soilchem/metadata_soilchem_yamsys.txt) | Metadata about the laboratory reference data set in `./data/soilchem/soilchem_yamsys.csv`. Description of column names in header (IDs, covariates and soil properties) and details about the laboratory reference analyses. Simple text file.
| [`./data/soilchem/`](data/soilchem) | [`soilchem_yamsys.csv`](data/soilchem/soilchem_yamsys.csv) | Soil chemical reference data set as `.csv` text file.
| [`.data/spectra/`](data/spectra) | `<sample_id>.<spc_rep_number>` | Bruker OPUS binary spectrometer files containing all spectral information. File extensions, `<spc_rep_numbers>`, are sequentially by `<sample_id>` numbered integers, starting with `0`, and representing replicate spectroscopic measurements of a sample. Bruker OPUS files contain the entire set of measurement parameters and all saved spectra of different types, for this project sample mid-infrared reflectance spectra, reference (KBr) reflectance spectra, non-atmospherically (CO<sub>2</sub>, water absorption bands) corrected spectra, and final atmospherically corrected spectra. The binary files are read using [this file reader function](https://github.com/philipp-baumann/simplerspec/blob/master/R/read-opus-universal.R) available in the [simplerspec](https://github.com/philipp-baumann/simplerspec) R package. |
| [`./manuscript/`](manuscript) | `...` | Contains all files to re-create the manuscript of the publication on the YAMSYS soil spectroscopy reference library. Reproducibilty of text and results is achieved by combining GNU make, R Markdown and LaTex.
| [`./models/rep-kfold-cv`](models/rep-kfold-cv) | `pls_<soil_property>.Rds` | Contains R model outputs from all developed PLS regression models. The `.Rds` files are a binary representation of R list output from `simplerspec::fit_pls()` and i.e. contain list element `model`, which contains the `caret::train()` output that can for example be used to make predictions from new spectra using the calibration models developed in this spectral library. The custom function `simplerspec::predict_from_spc()` can e.g. be used to return predictions from multiple soil property spectroscopic models in the form of tidy data frames, including metadata such as `sample_id` or `unique_id` (`sample_id` combined with measurement date and time). |
| [`./out`](out) | `...` | Contains miscellaneous file outputs of intermediary processed data and figures that are generated from code in primary R scripts located in `./`. |
| [`./out/data/`](out/data) | [`spec_chem.Rds`](out/data/spec_chem.Rds) | Tibble data frame containing the following columns for each replicate spectrum (row): measurement IDs (columns `unique_id`, `file_id`, `sample_id`); spectral metadata (list-column column `metadata`; list of tibble data frames); raw, resampled and preprocessed spectral data as lists of `data.tables` (list-columns `spc`, `spc_rs` and `spc_pre`); wavenumber vectors of raw, resampled and preprocessed spectra (list-columns `wavenumbers`, `wavenumbers_rs` and `xvalues_pre`). |
| [`./out/figs/`](out/figs) | `.pdf` | Figure output for the manuscript, the same duplicate files are also generated within `./manuscript/figs/`, but here named verbosely instead of following figure naming submission requirements of the journal. |
| `./` |  [`yamsys-soilspec-publication.Rproj`](yamsys-soilspec-publication.Rproj) | RStudio project file that can be used as a shortcut for opening the project directly from the file system. Double-clicking this file after downloading, the entire self-contained project will open RStudio and automatically set the R working directory to the project root. This avoids hard-coding file paths beneath the project directory hierarchy within all R scripts, thereby facilitating code transfer for spectroscopic models and reproducibility. See [here](https://support.rstudio.com/hc/en-us/articles/200526207-Using-Projects) for details. |

# R session info

Below is the R `sessionInfo()` output after loading required packages ([tidyverse collection of packages](https://www.tidyverse.org) and [simplerspec](https://github.com/philipp-baumann/simplerspec)) with `library()`.
This was the computational environment based on which the analysis of this project was conduced and reported accordingly in the manuscript.

```
\> sessioninfo::session_info()
─ Session info ──────────────────────────────────────────────────────────────────────────────────────────────
 setting  value                       
 version  R version 3.6.0 (2019-04-26)
 os       Ubuntu 18.04.2 LTS          
 system   x86_64, linux-gnu           
 ui       RStudio                     
 language (EN)                        
 collate  en_US.UTF-8                 
 ctype    en_US.UTF-8                 
 tz       Europe/Zurich               
 date     2019-06-19                  

─ Packages ──────────────────────────────────────────────────────────────────────────────────────────────────
 ! package           * version    date       lib source                                      
 P assertthat          0.2.1      2019-03-21 [?] CRAN (R 3.6.0)                              
   backports           1.1.4      2019-04-10 [1] CRAN (R 3.6.0)                              
   bismer              0.1.1      2019-06-17 [1] Github (hrbrmstr/bismer@d585fa2)            
   broom               0.5.2      2019-04-07 [1] CRAN (R 3.6.0)                              
   callr               3.2.0      2019-03-15 [1] CRAN (R 3.6.0)                              
   caret               6.0-84     2019-04-27 [1] CRAN (R 3.6.0)                              
   cellranger          1.1.0      2016-07-27 [1] CRAN (R 3.6.0)                              
   ChemometricsWithR * 0.1.13     2019-01-07 [1] CRAN (R 3.6.0)                              
   class               7.3-15     2019-01-01 [4] CRAN (R 3.5.2)                              
 P cli                 1.1.0      2019-03-19 [?] CRAN (R 3.6.0)                              
   codetools           0.2-16     2018-12-24 [4] CRAN (R 3.5.2)                              
   colorspace          1.4-1      2019-03-18 [1] CRAN (R 3.6.0)                              
   cowplot             0.9.4      2019-01-08 [1] CRAN (R 3.6.0)                              
 P crayon              1.3.4      2017-09-16 [?] CRAN (R 3.6.0)                              
 P curl                3.3        2019-01-10 [?] CRAN (R 3.6.0)                              
   data.table        * 1.12.2     2019-04-07 [1] CRAN (R 3.6.0)                              
   desc                1.2.0      2018-05-01 [1] CRAN (R 3.6.0)                              
   devtools            2.0.2      2019-04-08 [1] CRAN (R 3.6.0)                              
   digest              0.6.19     2019-05-20 [1] CRAN (R 3.6.0)                              
   dplyr             * 0.8.1      2019-05-14 [1] CRAN (R 3.6.0)                              
   e1071               1.7-2      2019-06-05 [1] CRAN (R 3.6.0)                              
   evaluate            0.14       2019-05-28 [1] CRAN (R 3.6.0)                              
 P fansi               0.4.0      2018-10-05 [?] CRAN (R 3.6.0)                              
   forcats           * 0.4.0      2019-02-17 [1] CRAN (R 3.6.0)                              
   foreach           * 1.4.4      2017-12-12 [1] CRAN (R 3.6.0)                              
   fs                  1.3.1      2019-05-06 [1] CRAN (R 3.6.0)                              
   generics            0.0.2      2018-11-29 [1] CRAN (R 3.6.0)                              
   ggplot2           * 3.2.0      2019-06-16 [1] CRAN (R 3.6.0)                              
   ggrepel           * 0.8.1      2019-05-07 [1] CRAN (R 3.6.0)                              
 P glue                1.3.1      2019-03-12 [?] CRAN (R 3.6.0)                              
   gower               0.2.1      2019-05-14 [1] CRAN (R 3.6.0)                              
   gtable              0.3.0      2019-03-25 [1] CRAN (R 3.6.0)                              
   haven               2.1.0      2019-02-19 [1] CRAN (R 3.6.0)                              
   here              * 0.1        2017-05-28 [1] CRAN (R 3.6.0)                              
 P hms                 0.4.2      2018-03-10 [?] CRAN (R 3.6.0)                              
   htmltools           0.3.6      2017-04-28 [1] CRAN (R 3.6.0)                              
   httr                1.4.0      2018-12-11 [1] CRAN (R 3.6.0)                              
   ipred               0.9-9      2019-04-28 [1] CRAN (R 3.6.0)                              
   iterators           1.0.10     2018-07-13 [1] CRAN (R 3.6.0)                              
 P jsonlite            1.6        2018-12-07 [?] CRAN (R 3.6.0)                              
   knitr               1.23       2019-05-18 [1] CRAN (R 3.6.0)                              
   kohonen             3.0.8      2018-12-17 [1] CRAN (R 3.6.0)                              
   labeling            0.3        2014-08-23 [1] CRAN (R 3.6.0)                              
   lattice             0.20-38    2018-11-04 [4] CRAN (R 3.5.1)                              
   lava                1.6.5      2019-02-12 [1] CRAN (R 3.6.0)                              
   lazyeval            0.2.2      2019-03-15 [1] CRAN (R 3.6.0)                              
   lubridate           1.7.4      2018-04-11 [1] CRAN (R 3.6.0)                              
 P magrittr            1.5        2014-11-22 [?] CRAN (R 3.6.0)                              
   MASS                7.3-51.1   2018-11-01 [4] CRAN (R 3.5.1)                              
   Matrix              1.2-17     2019-03-22 [4] CRAN (R 3.5.3)                              
   memoise             1.1.0      2017-04-21 [1] CRAN (R 3.6.0)                              
   ModelMetrics        1.2.2      2018-11-03 [1] CRAN (R 3.6.0)                              
   modelr              0.1.4      2019-02-18 [1] CRAN (R 3.6.0)                              
   munsell             0.5.0      2018-06-12 [1] CRAN (R 3.6.0)                              
   nlme                3.1-139    2019-04-09 [4] CRAN (R 3.5.3)                              
   nnet                7.3-12     2016-02-02 [4] CRAN (R 3.5.0)                              
   packrat           * 0.5.0      2018-11-14 [1] CRAN (R 3.6.0)                              
   pillar              1.4.1      2019-05-28 [1] CRAN (R 3.6.0)                              
   pkgbuild            1.0.3      2019-03-20 [1] CRAN (R 3.6.0)                              
 P pkgconfig           2.0.2      2018-08-16 [?] CRAN (R 3.6.0)                              
   pkgload             1.0.2      2018-10-29 [1] CRAN (R 3.6.0)                              
   pls                 2.7-1      2019-03-23 [1] CRAN (R 3.6.0)                              
   plyr                1.8.4      2016-06-08 [1] CRAN (R 3.6.0)                              
   prettyunits         1.0.2      2015-07-13 [1] CRAN (R 3.6.0)                              
   processx            3.3.1      2019-05-08 [1] CRAN (R 3.6.0)                              
   prodlim             2018.04.18 2018-04-18 [1] CRAN (R 3.6.0)                              
   ps                  1.3.0      2018-12-21 [1] CRAN (R 3.6.0)                              
   purrr             * 0.3.2      2019-03-15 [1] CRAN (R 3.6.0)                              
 P R6                  2.4.0      2019-02-14 [?] CRAN (R 3.6.0)                              
   Rcpp                1.0.1      2019-03-17 [1] CRAN (R 3.6.0)                              
   readr             * 1.3.1      2018-12-21 [1] CRAN (R 3.6.0)                              
   readxl              1.3.1      2019-03-13 [1] CRAN (R 3.6.0)                              
   recipes             0.1.5      2019-03-21 [1] CRAN (R 3.6.0)                              
 P remotes             2.0.4      2019-04-10 [?] CRAN (R 3.6.0)                              
   reshape2            1.4.3      2017-12-11 [1] CRAN (R 3.6.0)                              
   rlang               0.3.4      2019-04-07 [1] CRAN (R 3.6.0)                              
   rmarkdown           1.13       2019-05-22 [1] CRAN (R 3.6.0)                              
   rpart               4.1-15     2019-04-12 [4] CRAN (R 3.6.0)                              
   rprojroot           1.3-2      2018-01-03 [1] CRAN (R 3.6.0)                              
   rstudioapi          0.10       2019-03-19 [1] CRAN (R 3.6.0)                              
   rvest               0.3.4      2019-05-15 [1] CRAN (R 3.6.0)                              
   scales              1.0.0      2018-08-09 [1] CRAN (R 3.6.0)                              
   sessioninfo         1.1.1      2018-11-05 [1] CRAN (R 3.6.0)                              
   simplerspec       * 0.1.0      2019-06-19 [1] Github (philipp-baumann/simplerspec@fcc7643)
 P stringi             1.4.3      2019-03-12 [?] CRAN (R 3.6.0)                              
 P stringr           * 1.4.0      2019-02-10 [?] CRAN (R 3.6.0)                              
   survival            2.43-3     2018-11-26 [4] CRAN (R 3.5.1)                              
   testthat            2.1.1      2019-04-23 [1] CRAN (R 3.6.0)                              
   tibble            * 2.1.3      2019-06-06 [1] CRAN (R 3.6.0)                              
   tidyr             * 0.8.3      2019-03-01 [1] CRAN (R 3.6.0)                              
   tidyselect          0.2.5      2018-10-11 [1] CRAN (R 3.6.0)                              
   tidyverse         * 1.2.1      2017-11-14 [1] CRAN (R 3.6.0)                              
   timeDate            3043.102   2018-02-21 [1] CRAN (R 3.6.0)                              
   usethis             1.5.0      2019-04-07 [1] CRAN (R 3.6.0)                              
 P utf8                1.1.4      2018-05-24 [?] CRAN (R 3.6.0)                              
   vctrs               0.1.0      2018-11-29 [1] CRAN (R 3.6.0)                              
   withr               2.1.2      2018-03-15 [1] CRAN (R 3.6.0)                              
   xfun                0.7        2019-05-14 [1] CRAN (R 3.6.0)                              
   xml2                1.2.0      2018-01-24 [1] CRAN (R 3.6.0)                              
   zeallot             0.1.0      2018-01-28 [1] CRAN (R 3.6.0)                              

[1] /home/baumanph/R/x86_64-pc-linux-gnu-library/3.6
[2] /usr/local/lib/R/site-library
[3] /usr/lib/R/site-library
[4] /usr/lib/R/library

 P ── Loaded and on-disk path mismatch.
```

