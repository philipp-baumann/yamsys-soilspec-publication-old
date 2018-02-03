# Overview

This repository contains all necessary data, metadata, code and text to reproduce the 
reference models and the manuscript for the soil spectral library that was 
created in order to assess soil-fertility related properties in four landscapes
across the West African yam belt.

The spectroscopic model library presented in this manuscript builds upon the [`simplerspec`](https://github.com/philipp-baumann/simplerspec) R package, a framework that aims to
streamline data processing and modeling for infrared diffuse reflectance spectroscopy applications.


# Project directory structure and important files

Below is a short overview of how folders and files are organized. The project
root folder (`.`) contains every file necessary to run the analysis and produce
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
| `./` | `20_build-spectroscopy-models.R`| Build spectroscopic reference models covering sampled fields within the four YAMSYS pilot landscapes. Tune PLS regression models using repeated ten-fold cross-validation, and derive final models at optimal number of components, develp one final model for each soil property. |
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
| `./` |  `.Rproj` | RStudio project file that can be used as a shortcut for opening the project directly from the file system. Double-clicking this file after downloading the entire self-contained project will open RStudio and automatically set the R working directory to the project root. This avoids hard-coding file paths beneath the project directory hierarchy within all R scripts, thereby facilitating code transfer for spectroscopic models and reproducibility. See [here](https://support.rstudio.com/hc/en-us/articles/200526207-Using-Projects) for details. |

