# Data README

This document serves as a guide for interpreting the various files and folders in the Data folder. This is the hub of our project, in the sense that it integrates all of the raw data sources into a final data set. We use CombiningDatasets.ipynb to accomplish this task, the cleanDataset.ipynb file is used to further clean and process the final dataset, and the visualizeDataset files are used to visualize the datasets. Expansion on the specific files below...


## File Definitions:

- **CombiningDatasets.ipynb**: Our main script in the entire project, used to merge all of our raw datasets, create our features, manipulate features and create our final dataset. The main process is as follows: The file reads in data from our combined fire dataset, it eliminates incidents that do not fall in our temporal or spatial (California) range, it pulls in positive examples and negative examples, and then it generates random (synthetic) examples using dates, times and locations that are not reported as an active wildfire. Using this data, the basic data csv is created. Afterwards, the script takes the basic data csv and appends all of our historical and immediate meteorological and fire history features along with some other additional station related features. After the inclusion of this additional data, our enhanced data csv file is created, this is our dataset.

- **basic_data.csv**: Fire incidents without historical and immediate meteorological and fire history features.

- **enhanced_data.csv**: The inclusion of the rest of the feature set appended onto basic_data.csv.

- **cleanDataset.ipynb**: The script used to clean our enhanced dataset and perform additional feature selection, imputation and modification. This file creates 3 (df1-df3) datasets with different characteristics.

- **enhanced_data_df1.csv**: NaN columns and rows dropped.

- **enhanced_data_df2.csv**: NaN columns dropped, NaN rows imputed with values (mean/median/mode).

- **enhanced_data_df3.csv**: NaN columns dropped, NaN rows imputed with different values(mean/mode).

- **visualizeDataset_df1.ipynb**: Used to visualize our dataset df1.

- **visualizeDataset_df2.ipynb**: Used to visualize our dataset df2.

- **visualizeDataset_df3.ipynb**: Used to visualize our dataset df3.


## Folder Definitions:


## Custom Features in the Files or Generated


## Credits





