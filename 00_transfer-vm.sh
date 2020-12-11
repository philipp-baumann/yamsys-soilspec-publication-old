#!/bin/bash
rsync -razvP --update -e ssh /media/ssd/nas-ethz/doktorat/projects/01_spectroscopy/21_yamsys-soilspec-publication/ baumanph@g-wst-sae-baumanph.ethz.ch:local/21_yamsys-soilspec-publication
