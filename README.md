
# Shipping Demand Prediction Dashboard (Pytorch / React / NodeJS)

This project focuses on evaluating candidate models using various cross-validation metrics to determine the best model for predicting natural rubber export demand. The deep learning part of the project is developed using PyTorch/Python. The frontend is developed using React, while the backend is developed in Node.js to serve the model.

---

## Features

### 1. Data Handling and Preparation
   - **Dataset Loading**: Utilizes various datasets related to natural rubber exports, including historical export data, price data, and other relevant economic indicators.
   - **Data Preprocessing**: Includes steps to clean and preprocess the data, ensuring it is suitable for modeling.

### 2. Machine Learning and Deep Learning Models
   - **Model Development**: Implements different machine learning and deep learning models using PyTorch.
   - **Model Evaluation**: Uses cross-validation techniques to evaluate models and determine the best-performing one.

### 3. Cross-Validation Metrics
   - **Evaluation Metrics**: Utilizes metrics such as Mean Absolute Error (MAE), Root Mean Square Error (RMSE), and R-squared (R²) to evaluate model performance.
   - **Hyperparameter Tuning**: Involves tuning hyperparameters to optimize model performance.

### 4. Frontend (React)
   - **User Interface**: Develops a user-friendly interface for users to input data, visualize predictions, and interact with the model.
   - **Data Visualization**: Uses libraries like Chart.js to visualize model predictions and other relevant data.

### 5. Backend (Node.js)
   - **API Development**: Develops RESTful APIs to handle requests from the frontend, process data, and interact with the machine learning models.
   - **Model Serving**: Hosts the trained models and makes predictions based on user input.

### 6. Visualization and Analysis
   - **Data Visualization**: Provides tools for visualizing the dataset and model outputs using libraries such as matplotlib in Python and Chart.js in React.
   - **Result Analysis**: Analyzes the results of the models to interpret findings and draw conclusions about natural rubber export demand.

### 7. Configuration and Documentation
   - **Configurable Parameters**: Allows configuration of various parameters such as batch size, learning rate, and model architecture.
   - **Comprehensive Documentation**: Includes detailed documentation for the code, dataset, and experimental setup.

---

## Detailed Explanation

### **Data Handling and Preparation**

- **Data Sources**: Utilizes multiple data sources related to natural rubber exports, including trade data, economic indicators, and weather data.
- **Preprocessing Steps**: Involves data cleaning, normalization, and transformation to prepare the data for modeling.

### **Machine Learning and Deep Learning Models**

- **Model Implementation**: Implements models such as Linear Regression, Decision Trees, Random Forests, and Neural Networks using PyTorch.
- **Evaluation and Selection**: Evaluates models using cross-validation and selects the best-performing model based on predefined metrics.

### **Frontend (React)**

- **User Interaction**: Develops a web interface for users to interact with the model, input data, and view predictions.
- **Visualization Tools**: Integrates data visualization tools to display predictions and trends.

### **Backend (Node.js)**

- **API Endpoints**: Creates endpoints for data input, model prediction, and result retrieval.
- **Model Serving**: Serves the trained models through the backend, enabling real-time predictions based on user input.

### **Visualization and Analysis**

- **Charts and Graphs**: Utilizes various charting libraries to display data trends, prediction results, and model performance.
- **Insight Generation**: Analyzes results to provide insights into factors affecting natural rubber export demand.

### **Configuration and Documentation**

- **Parameter Configuration**: Allows easy configuration of model parameters and settings.
- **Documentation**: Provides comprehensive documentation to guide users through the setup, usage, and functionality of the project.

---

## Usage Instructions

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies**: 
   - For the backend:
     ```bash
     cd backend
     npm install
     ```
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Run the Backend Server**:
   ```bash
   cd backend
   npm start
   ```

4. **Run the Frontend Application**:
   ```bash
   cd frontend
   npm start
   ```

5. **Access the Application**:
   Open your browser and go to `http://localhost:3000` to access the frontend.

6. **API Endpoints**:
   - **Get Prediction**: `POST /api/predict`
   - **Get Model Information**: `GET /api/model`

For detailed information on the API usage and parameters, refer to the API documentation included in the backend directory.

---
## Directory Structure

```plaintext
|-- 02.jpg
|-- 03-FrontCover-Declaration-Page.V2.docx
|-- 03.jpg
|-- 04.jpg
|-- 05.jpg
|-- 06.jpg
|-- 07-BCS-Code-of-Coduct-Conduct.pdf
|-- 07-Professional.Legal.Ethical.Social-2017.pptx
|-- 07.jpg
|-- 09.jpg
|-- 2020forecast.PNG
|-- Application_of_machine_learning_techniqu.pdf
|-- Artificial Intelligence based Supply Chain Demand forecasting for the Shipping Industry.docx
|-- Big data analytics and application for logistics and supply chain management.pdf
|-- Capture.PNG
|-- EB9867_State_of_Artificial_Intelligence_for_the_Enterprises.pdf
|-- Interim Report 2020 _ Jan.pdf
|-- METADATA OF THE.pdf
|-- MODEL_1.1.gdt
|-- MODEL_1.1.inp
|-- Not_Invoiced_Report_Defect_Sheet.ods
|-- Note Pad.docx
|-- Outlining the presentation.docx
|-- Presentation (1).pptx
|-- Presentation - Advantis Shipping.pdf
|-- Presented
    |-- ai-and-cargo-shipping-oocl.jpg
    |-- chat-1.PNG
    |-- chat-2.PNG
    |-- comparison-of-models.PNG
    |-- dashboard.png
    |-- demand-forecasting-sample.PNG
    |-- end-customer-demand.png
    |-- expected-behaviour.png
    |-- mail.png
    |-- moving average error.png
    |-- partner-simulation.PNG
    |-- partners.png
    |-- phased.png
    |-- prediction.png
    |-- revenue drivers.PNG
    |-- svm - best performing model.png
|-- StudentProjectEthicalReviewSPERForm-2014.doc
|-- ZahiraCollegeColombo-Branding-Guidlines.jpg
|-- backend
    |-- .editorconfig
    |-- .env.example
    |-- .eslintignore
    |-- .eslintrc
    |-- .gitignore
    |-- .idea
        |-- .gitignore
    |-- Procfile
    |-- README.md
    |-- bin
        |-- logStart.js
        |-- onError.js
        |-- www.js
    |-- database.rules.json
    |-- package-lock.json
    |-- package.json
    |-- scripts
        |-- herokuPreBuildSourceVersion.js
    |-- src
        |-- app-middleware
            |-- bodyParserJsonFactory.js
            |-- bodyParserUrlEncodeFactory.js
            |-- compressionFactory.js
            |-- corsFactory.js
            |-- errorHandlerFactory.js
            |-- middlewareFactory.js
            |-- middlewareFactoryList.js
            |-- routesFactory.js
            |-- swaggerFactory.js
            |-- unmatchedRouteHandlerFactory.js
        |-- app.js
        |-- config.js
        |-- controllers
            |-- parameterController.js
            |-- predictionController.js
            |-- userController.js
        |-- database.js
        |-- models
            |-- errorTypes.js
            |-- parameter-value-model.js
            |-- prediction-model.js
            |-- userModel.js
        |-- routes
            |-- getRoot.js
            |-- index.js
        |-- services
            |-- getAppInfo.js
            |-- getCommitSlug.js
            |-- getGitData.js
            |-- logFunctionFactory.js
    |-- swagger.json
    |-- tests
        |-- .eslintrc
        |-- integration.opts
        |-- integration
            |-- routes
                |-- getRoot.js
        |-- unit.opts
        |-- unit
            |-- services
                |-- getAppInfo.js
                |-- logFunctionFactory.js
|-- chart-selection-diagram.png
|-- chart_too_complex.png
|-- consider not needed
    |-- challenges by.png
    |-- demand forcasting.png
    |-- minmum MAE.png
    |-- sample data.png
    |-- shipmax.png
    |-- simulation.png
|-- data_processed
    |-- ALL_DATA_SUMMARIZED.ods
    |-- CALENDAR.ods
    |-- FINAL_2.0_Shifted.xls
    |-- FINAL_DATASET.ods
    |-- MODEL.csv
    |-- MODEL_1.1.ods
    |-- MODEL_1.1.xls
    |-- MODEL_1.2.xls
    |-- NORMALIZED_DATA_1.0.gdt
    |-- Untitled 2.csv
    |-- anrpc
        |-- MARKET REVIEW Q1_Q2 2009.PDF
        |-- MARKET REVIEW Q3 2009.PDF
        |-- MARKET REVIEW Q4 2007.PDF
        |-- MONTHLTY BULLETIN - FEBRUARY 2009.PDF
        |-- MONTHLY BULLETIN - AUGUST 2009.PDF
        |-- MONTHLY BULLETIN - JULY 2009.PDF
        |-- MONTHLY BULLETIN - JUNE 2009.PDF
        |-- MONTHLY BULLETIN - MARCH 2009.PDF
        |-- MONTHLY BULLETIN - OCTOBER 2009.PDF
        |-- MONTHLY BULLETIN - SEPTEMBER 2009.PDF
        |-- MONTHLY BULLETIN APRIL-MAY 2009.PDF
        |-- NRTS APR 2010.PDF
        |-- NRTS AUG 2010.PDF
        |-- NRTS DEC 2009.PDF
        |-- NRTS JAN 2010.PDF
        |-- NRTS JULY 2010.PDF
        |-- NRTS JUN 2010.PDF
        |-- NRTS MAR 2010.PDF
        |-- NRTS MAY 2010.PDF
        |-- NRTS NOV 2009.PDF
        |-- NRTS OCT 2010.PDF
        |-- NRTS SEPT 2010.PDF
        |-- NTRS FEB 2010.PDF
        |-- PROFILE SMALLHOLDINGS 2006.PDF
        |-- RUBBER WOOD STATISTICS 2007.PDF
    |-- arbc
        |-- NR CONSUMPTION (TONNES)-2018-19_CSV.csv
        |-- NR PRODUCTION (TONNES)-2018.ods
        |-- NR PRODUCTION (TONNES)_2018-19_CSV.csv
        |-- TOTAL EXPORTS OF NR & CHINA MIXTURE RUBBER (TONNES)_2018-19_CSV.csv
        |-- TOTAL_EXPORTS_OF_NR_2018.csv
        |-- non_csv
            |-- NR CONSUMPTION (TONNES)-2018-19.ods
            |-- TOTAL EXPORTS OF NR & CHINA MIXTURE RUBBER (TONNES)_2018-19.ods
    |-- aseanrubber
        |-- 13_may_2017.pdf
        |-- 24_aug_2019.pdf
        |-- 27_aug_2016.pdf
        |-- 6_oct_2018.pdf
        |-- 7_apr_2018.pdf
        |-- 9_dec_2017.pdf
        |-- nrpricechart_2019.pdf
    |-- china
        |-- china_all_imports
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia.xls
            |-- Trade_Map_-_List_of_products_imported_by_China (1).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (10).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (11).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (12).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (13).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (14).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (15).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (16).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (2).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (3).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (4).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (5).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (6).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (7).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (8).xls
            |-- Trade_Map_-_List_of_products_imported_by_China (9).xls
            |-- Trade_Map_-_List_of_products_imported_by_China.xls
        |-- china_from_indonesia
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (1).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (10).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (11).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (12).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (13).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (14).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (15).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (2).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (3).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (4).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (5).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (6).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (7).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (8).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia (9).xls
            |-- Trade_Map_-_Bilateral_trade_between_China_and_Indonesia.xls
        |-- china_imports.ods
    |-- communications
        |-- NDA with Ammar.docx
        |-- NDA with Ammar.docx.pdf
        |-- Presentation 2.0.pptx
        |-- Presentation.pptx
        |-- Seasonality of Rubber Exports (2016  - 2018).pdf
    |-- data_archive
        |-- Compare Competitors.xlsx
        |-- ExImByCountryQuarter_data.csv
        |-- FINAL.csv
        |-- FINAL.ods
        |-- FINAL_1.0.csv
        |-- FINAL_1.0.xls
        |-- FINAL_SHIFTED_1.0.xls
        |-- MODEL_1.1 - Copy.xls
        |-- MSc Weekly Report for Project Investigation_Project.pdf
        |-- NORMALIZATION_DATA_0.1.ods
        |-- Trade_Map_-_Existing_and_potential_trade_between_Asia_and_Asia.xls
        |-- USD_IDN_2018.ods
        |-- USD_IDN_2018_CSV.csv
        |-- export_production_value.ods
        |-- links_indonesia.ods
        |-- links_singapore.ods
        |-- research-plan.txt
        |-- rubber_exporters_sigapore.ods
        |-- seasonality.ods
        |-- seasonality.xls
    |-- delete this.txt
    |-- delete.ods
    |-- dump
        |-- FINAL_1.0.pdf
        |-- NR CONSUMPTION (TONNES)_2018-19.ods
        |-- NR PRODUCTION (TONNES)-2019.ods
    |-- export
        |-- HSCODE_400_EXPORT_QUANTITIES.ods
        |-- Trade_Map_-_List_of_products_exported_by_Indonesia (1).xls
        |-- Trade_Map_-_List_of_products_exported_by_Indonesia (2).xls
        |-- Trade_Map_-_List_of_products_exported_by_Indonesia (3).xls
        |-- Trade_Map_-_List_of_products_exported_by_Indonesia (4).xls
        |-- Trade_Map_-_List_of_products_exported_by_Indonesia (5).xls
        |-- Trade_Map_-_List_of_products_exported_by_Indonesia (6).xls
        |-- Trade_Map_-_List_of_products_exported_by_Indonesia (7).xls
        |-- Trade_Map_-_List_of_products_exported_by_Indonesia.xls
        |-- monthly_2006-2018.csv
        |-- monthly_2006-2018.ods
    |-- gapkindo
        |-- gapkindo_ircorubber.com_Archive [20-01-11 13-55-12]
        |-- indonesian_companies_www.indonesia-investments.com_Archive [20-01-11 12-22-41]
        |-- rubber_companies_indonesia_www.gapkindo.org_Archive [20-01-11 13-15-42]
        |-- rubber_price_ircorubber.com_Archive [20-01-11 13-57-43]
    |-- gretl
        |-- images
            |-- Harga-untuk-Posting-2.jpg
            |-- Natural_Rubber_Smallholder_Economics-Table.png
            |-- Slide1.jfif
            |-- Slide2.jfif
            |-- indonesia-map.png
            |-- indonesia_s_downstream_rubber_industry_waiting_for_investors-01.jpg
            |-- rubber-map-indonesia.png
        |-- session.inp
    |-- hs_codes
        |-- hs code specs.ods
        |-- hscodes_natural_rubber.ods
    |-- ihsmarkit
        |-- multi-page.pdf
    |-- ircon_rubber_prices
        |-- 01.png
        |-- 02.png
        |-- 03.png
        |-- 04.png
        |-- 05.png
        |-- 06.png
        |-- 07.png
        |-- 08.png
        |-- 09.png
        |-- 10.png
        |-- HisID2016-1.png
        |-- HisID2016-10.png
        |-- HisID2016-11.png
        |-- HisID2016-12.png
        |-- HisID2016-2.png
        |-- HisID2016-3.png
        |-- HisID2016-4.png
        |-- HisID2016-5.png
        |-- HisID2016-6.png
        |-- HisID2016-7.png
        |-- HisID2016-8.png
        |-- HisID2016-9.png
        |-- HisID2017-1.png
        |-- HisID2017-10.png
        |-- HisID2017-11.png
        |-- HisID2017-12.png
        |-- HisID2017-2.png
        |-- HisID2017-3.png
        |-- HisID2017-4.png
        |-- HisID2017-5.png
        |-- HisID2017-6.png
        |-- HisID2017-8.png
        |-- HisID2017-9.png
        |-- HisID2018-1.png
        |-- HisID2018-10.png
        |-- HisID2018-11.png
        |-- HisID2018-12.png
        |-- HisID2018-2.png
        |-- HisID2018-3.png
        |-- HisID2018-4.png
        |-- HisID2018-5.png
        |-- HisID2018-6.png
        |-- HisID2018-7.png
        |-- HisID2018-8.png
        |-- HisID2018-9.png
    |-- line_charts
        |-- all.PNG
        |-- exchange_rates.PNG
        |-- export_change_vs_volume.png
        |-- export_vol_vs_exrate_lines.PNG
        |-- export_vol_vs_sicom_line.PNG
        |-- export_volume_line.PNG
        |-- export_vs_consumption.png
        |-- export_vs_rss40.png
        |-- nfta_price.PNG
        |-- prediction.png
        |-- production_vs_exports.png
        |-- seasonality_2016-2018.png
        |-- sicom-price_vs_export_volume_line.png
        |-- sicom_price.PNG
        |-- sicom_price_percentage_vs_export_volume_regression.png
        |-- sicom_price_vs_export_volume.png
        |-- svm_confusion_matrix.png
        |-- svm_optimization_parameters.png
    |-- malaysian_x
        |-- 2018
            |-- MALAYSIAN_RUBBER_EXCHANGE_2018.csv
            |-- all_2018.xls
            |-- raw
                |-- crpricesus_print (1).xls
                |-- crpricesus_print (10).xls
                |-- crpricesus_print (11).xls
                |-- crpricesus_print (12).xls
                |-- crpricesus_print (2).xls
                |-- crpricesus_print (3).xls
                |-- crpricesus_print (4).xls
                |-- crpricesus_print (5).xls
                |-- crpricesus_print (6).xls
                |-- crpricesus_print (7).xls
                |-- crpricesus_print (8).xls
                |-- crpricesus_print (9).xls
                |-- crpricesus_print.xls
                |-- crpricesus_print_2018_dec.xls
        |-- 2019
            |-- apr_2019.xls
            |-- aug_2019.xls
            |-- dec_2019.xls
            |-- feb_2019.xls
            |-- jan_2019.xls
            |-- jul_2019.xls
            |-- jun_2019.xls
            |-- mar_2019.xls
            |-- market_closing_days.pdf
            |-- nov_2019.xls
            |-- oct_2019.xls
            |-- sep_2019.xls
        |-- 2020
            |-- jan_2020.xls
        |-- format.txt
    |-- model_explanation
        |-- crude-oil.PNG
        |-- export-4007.PNG
        |-- fitted.PNG
        |-- plantation.PNG
        |-- rss3-price.PNG
    |-- mongodb
        |-- model_parameters.csv
        |-- parameters.csv
        |-- paramter_values.csv
        |-- prediction.csv
    |-- not_processed
        |-- Trade_Map_-_List_of_importing_markets_for_a_product_exported_by_Indonesia (1).xls
        |-- en_IDN_AllYears_WITS_Trade_Summary.CSV
        |-- estate_sizes.ods
        |-- gdp_indonesia.ods
        |-- indonesia_natural_rubber_production_quantity_factfish.ods
        |-- indonesian_commodities.ods
        |-- knoema.com_FAOPRDSC2017_production-statistics-crops-crops-processed.ods
        |-- ramadan_time_table.ods
        |-- rubber-120.xls
        |-- rubber-60.xls
        |-- top5_countries_2014.ods
    |-- petrolium
        |-- NFTA Historical Data.csv
        |-- NFTA_PROCESSED.csv
        |-- NFTA_PROCESSED.ods
        |-- naphta-price-2018.csv
        |-- naphta-price-2018.ods
        |-- naphta-price-2018_quarterly.csv
    |-- possible variables.txt
    |-- reading
        |-- MARKET REVIEW Q4 2007.PDF
        |-- MONTHLTY BULLETIN - FEBRUARY 2009.PDF
        |-- links.txt
        |-- rubber_organizations_indonesia.ods
        |-- trade expos.txt
    |-- results
        |-- Untitled 2.ods
        |-- model_fitted_0.85.ods
    |-- rsq94.ods
    |-- scripts
        |-- script 2.txt
        |-- script.txt
    |-- sicom
        |-- 2018
            |-- Contract Specifications for SGX SICOM TSR 20 Rubber Options Contract_1.pdf
            |-- List of Accepted Warehouses for SICOM OTC TSR 20 Rubber Contract_0.pdf
            |-- List+of+Recognised+Samplers.pdf
            |-- Monthly Physical Delivery Statistics.pdf
            |-- SGX Monthly Market Statistics Report Apr 2019.pdf
            |-- SGX Monthly Market Statistics Report Aug 2019_FA.pdf
            |-- SGX Monthly Market Statistics Report Dec 2018.pdf
            |-- SGX Monthly Market Statistics Report Dec 2019_FA.pdf
            |-- SGX Monthly Market Statistics Report Feb 2019.pdf
            |-- SGX Monthly Market Statistics Report Jan 2019_0 (1).pdf
            |-- SGX Monthly Market Statistics Report Jan 2019_0.pdf
            |-- SGX Monthly Market Statistics Report Jul 2018.pdf
            |-- SGX Monthly Market Statistics Report July 2019_FA2.pdf
            |-- SGX Monthly Market Statistics Report June 2019.pdf
            |-- SGX Monthly Market Statistics Report Mar 2019_FA2.pdf
            |-- SGX Monthly Market Statistics Report May 2019_FA.pdf
            |-- SGX Monthly Market Statistics Report Nov 2018_FA.pdf
            |-- SGX Monthly Market Statistics Report Nov 2019_FA.pdf
            |-- SGX Monthly Market Statistics Report Oct 2018_0.pdf
            |-- SGX Monthly Market Statistics Report Oct 2019.pdf
            |-- SGX Monthly Market Statistics Report Sep 2018.pdf
            |-- SGX Monthly Market Statistics Report Sep 2019_FA_0.pdf
            |-- SGX SICOM RSS 3 Rubber Approved Packer List.pdf
            |-- SGX SICOM Rubber Contracts (Eng)_(updated on 16 Dec 2019).pdf
            |-- SGX SICOM TSR 20 Rubber Approved Factory List (1).pdf
            |-- SGX SICOM TSR 20 Rubber Approved Factory List.pdf
            |-- SGX+Monthly+Market+Statistics+Report+-+Feb+2018.pdf
            |-- SGX+Monthly+Market+Statistics+Report+-+Jan+2018.pdf
            |-- SGX+Monthly+Market+Statistics+Report+-+Mar+2018.pdf
            |-- SGX+Monthly+Market+Statistics+Report+Apr+2018.pdf
            |-- SGX+Monthly+Market+Statistics+Report+Aug+2018.pdf
            |-- SGX+Monthly+Market+Statistics+Report+Jun+2018.pdf
            |-- SGX+Monthly+Market+Statistics+Report+–+May+2018.pdf
            |-- SICOM OTC TSR 20 Contract Specifications_1.pdf
            |-- SICOM RSS3 Rubber Contract Specifications.pdf
            |-- SICOM TSR 20 Rubber Contract Specifications.pdf
        |-- Rubber TSR20 Futures Historical Data.csv
        |-- SGX_SICOM_VOLUMES_2018.csv
        |-- all_2018.ods
        |-- prices_2015-2019.ods
        |-- sicom_price_2004_2019.xls
        |-- sicom_price_2006_2018.csv
    |-- singapore port
        |-- SINGAPORE REGISTRY OF SHIPS.xls
        |-- cargo-throughput.xls
        |-- container-throughput.xls
        |-- vessel-arrivals.xls
    |-- synthetic rubber
        |-- Trade_Map_-_List_of_importing_markets_for_a_product_exported_by_Indonesia (1).xls
        |-- Trade_Map_-_List_of_importing_markets_for_a_product_exported_by_Indonesia (10).xls
        |-- Trade_Map_-_List_of_importing_markets_for_a_product_exported_by_Indonesia (11).xls
        |-- Trade_Map_-_List_of_importing_markets_for_a_product_exported_by_Indonesia (2).xls
        |-- Trade_Map_-_List_of_importing_markets_for_a_product_exported_by_Indonesia (3).xls
        |-- Trade_Map_-_List_of_importing_markets_for_a_product_exported_by_Indonesia (4).xls
        |-- Trade_Map_-_List_of_importing_markets_for_a_product_exported_by_Indonesia (5).xls
        |-- Trade_Map_-_List_of_importing_markets_for_a_product_exported_by_Indonesia (6).xls
        |-- Trade_Map_-_List_of_importing_markets_for_a_product_exported_by_Indonesia (7).xls
        |-- Trade_Map_-_List_of_importing_markets_for_a_product_exported_by_Indonesia (8).xls
        |-- Trade_Map_-_List_of_importing_markets_for_a_product_exported_by_Indonesia (9).xls
        |-- Trade_Map_-_List_of_importing_markets_for_a_product_exported_by_Indonesia.xls
    |-- temperature script.txt
    |-- temperature timeseries correlogram.png
    |-- thainr
        |-- 20160215163746.pdf
        |-- 20160218100410.pdf
        |-- 20180328142912.pdf
        |-- 20180418154840.pdf
        |-- 20181011143717.pdf
        |-- 20181011144425.pdf
        |-- 20181113153634.pdf
        |-- 20181225111100.pdf
        |-- 20190124135406.pdf
        |-- 20190709103259.pdf
        |-- 20190709103836.pdf
        |-- 20190709104244.pdf
    |-- usd
        |-- USD_IDR Historical Data (1).csv
        |-- USD_IDR Historical Data (1).ods
        |-- USD_IDR Historical Data.csv
        |-- USD_IDR_2006_2018.csv
    |-- variable names.ods
    |-- weather
        |-- WEATHER_SUMMARY.ods
        |-- raw
            |-- laporan_iklim_harian (10).xlsx
            |-- laporan_iklim_harian (11).xlsx
            |-- laporan_iklim_harian (12).xlsx
            |-- laporan_iklim_harian (13).xlsx
            |-- laporan_iklim_harian (14).xlsx
            |-- laporan_iklim_harian (15).xlsx
            |-- laporan_iklim_harian (16).xlsx
            |-- laporan_iklim_harian (17).xlsx
            |-- laporan_iklim_harian (18).xlsx
            |-- laporan_iklim_harian (19).xlsx
            |-- laporan_iklim_harian (20).xlsx
            |-- laporan_iklim_harian (21).xlsx
            |-- laporan_iklim_harian (22).xlsx
            |-- laporan_iklim_harian (23).xlsx
            |-- laporan_iklim_harian (24).xlsx
            |-- laporan_iklim_harian (25).xlsx
            |-- laporan_iklim_harian (26).xlsx
            |-- laporan_iklim_harian (27).xlsx
            |-- laporan_iklim_harian (28).xlsx
            |-- laporan_iklim_harian (29).xlsx
            |-- laporan_iklim_harian (30).xlsx
            |-- laporan_iklim_harian (31).xlsx
            |-- laporan_iklim_harian (32).xlsx
            |-- laporan_iklim_harian (33).xlsx
            |-- laporan_iklim_harian (34).xlsx
            |-- laporan_iklim_harian (35).xlsx
            |-- laporan_iklim_harian (36).xlsx
            |-- laporan_iklim_harian (37).xlsx
            |-- laporan_iklim_harian (38).xlsx
            |-- laporan_iklim_harian (39).xlsx
            |-- laporan_iklim_harian (4).xlsx
            |-- laporan_iklim_harian (40).xlsx
            |-- laporan_iklim_harian (41).xlsx
            |-- laporan_iklim_harian (42).xlsx
            |-- laporan_iklim_harian (5).xlsx
            |-- laporan_iklim_harian (6).xlsx
            |-- laporan_iklim_harian (7).xlsx
            |-- laporan_iklim_harian (8).xlsx
            |-- laporan_iklim_harian (9).xlsx
    |-- wordbank
        |-- WITS-Partner (1).xlsx
        |-- WITS-Partner (10).xlsx
        |-- WITS-Partner (11).xlsx
        |-- WITS-Partner (2).xlsx
        |-- WITS-Partner (3).xlsx
        |-- WITS-Partner (4).xlsx
        |-- WITS-Partner (5).xlsx
        |-- WITS-Partner (6).xlsx
        |-- WITS-Partner (7).xlsx
        |-- WITS-Partner (8).xlsx
        |-- WITS-Partner (9).xlsx
        |-- WITS-Partner.xlsx
    |-- yearly_available_data.csv
    |-- yearly_data_latest.csv
|-- data_visualization_data_ink_ratio.gif
|-- data_visualization_pie_to_bar.gif
|-- demand formula.PNG
|-- df.gretl
|-- diagrams
    |-- Crude Oil Price Vs Export Volume.png
    |-- Export Volume and Crude Oil Price.png
    |-- Export Volume for 2015, 2017, 2016 and 2018.png
    |-- NR export Market (1).drawio
    |-- NR export Market (1).jpg
    |-- NR export Market (2).drawio
    |-- NR export Market (3).drawio
    |-- NR export Market simplified (1).drawio
    |-- NR export Market simplified (1).png
    |-- NR export Market simplified.drawio
    |-- NR export Market simplified.png
    |-- NR export Market.drawio
    |-- NR export Market.jpg
    |-- NR export Market.pdf
    |-- NR export Market.png
    |-- Ramadan Holidays Vs Export Volume.png
    |-- System.png
    |-- Untitled Diagram (1).drawio
    |-- Untitled Diagram.drawio
    |-- average-monthly-temperat.jpeg
    |-- screencapture-draw-io-2020-02-03-00_03_02.png
    |-- screencapture-draw-io-2020-02-03-00_12_18.png
|-- dsdsfsdf.PNG
|-- ed1a1062-2732-4e1b-864b-d4ddca3a6857.pdf
|-- fitted-actual.PNG
|-- forecast interface.PNG
|-- heteroskedasticity.pdf
|-- hs codes indonesia.pdf
|-- interfaces
    |-- adjust.png
    |-- cross-check.png
    |-- explore.png
    |-- forecast.PNG
    |-- variable-summary.png
|-- interim presentation.odp
|-- matlab
    |-- matlab.mat
    |-- sicom-price_vs_export_volume.png
|-- not needed
    |-- NN.png
    |-- image4.jpg
    |-- napa fleet intelligence.jpg
    |-- shipping process.jpg
|-- notepad.txt
|-- outbound.PNG
|-- papers
    |-- 2012
        |-- Import iron ore price forecasting based on.html
        |-- Import iron ore price forecasting based on.pdf
        |-- Import iron ore price forecasting based on_files
            |-- 06295020.html
            |-- 8d05fb3d7436.js.download
            |-- fingerprint.js.download
            |-- fingerprint2.js.download
            |-- ieee-button-99b6090d3f67956de85176040832eb6e.png
            |-- jquery.js.download
            |-- js.cookie.js.download
            |-- saved_resource(1).html
            |-- saved_resource.html
            |-- tealiumAnalytics.js.download
            |-- tealiumTagsData.js.download
            |-- utag.32.js.download
            |-- utag.34.js.download
            |-- utag.js.download
        |-- kernal machines.pdf
    |-- 2019
        |-- A Comparative Research of Machine Learning Impact to Future of Maritime Transportation.pdf
    |-- A case study The prediction of Taiwan’s export of polyester fiber.pdf
    |-- An approach for the formulation of sustainable replanting policies in.pdf
    |-- An-evolving-neuro-fuzzy-technique-for-system-state-forecas_2012_Neurocomputi.pdf
    |-- Artificial Intelligence based Supply Chain Demand forecasting for the Shipping Industry.pdf
    |-- Financial potential of rubber plantations.pdf
    |-- Forecasting equilibrium quantity and price on the world.pdf
    |-- Identification-of-market-trends-with-s_2017_Physica-A--Statistical-Mechanics.pdf
    |-- ScienceDirect_articles_14Dec2019_12-34-07.687.zip
    |-- ScienceDirect_articles_16Dec2019_08-22-38.731.zip
    |-- State-dependent-pricing--local-currency-pricing_2010_Journal-of-Economic-Dyn.pdf
    |-- Temporal and spatial evolution of global iron ore supply-demand and trade structure.pdf
    |-- The-import-competition-relationship-and-intensity-in-the-inter_2018_Resource.pdf
    |-- Towards a framework for sustainable development planning - india.pdf
    |-- Towards a framework for sustainable development planning - indonesia.pdf
    |-- Who will trade bauxite with whom Finding potential links through link prediction.pdf
    |-- not related
        |-- 1-s2.0-S0167739X19308003-main.pdf
        |-- 1_3-Butadiene_and_leukemia_among_synthet.pdf
        |-- A_topological_rubber_glove_obtained_from.pdf
|-- process-1.png
|-- rss3 overview.PNG
|-- rubber-cup.jpg
|-- rubber_research
    |-- .ipynb_checkpoints
        |-- Untitled-checkpoint.ipynb
        |-- model_test-Copy1-checkpoint.ipynb
        |-- model_test-checkpoint.ipynb
        |-- selected_models-checkpoint.ipynb
    |-- MODEL - Copy.csv
    |-- MODEL.csv
    |-- Untitled.ipynb
    |-- classic-time-series-models.pdf
    |-- model_test-Copy1.ipynb
    |-- model_test.ipynb
    |-- selected_models.ipynb
|-- screencapture-localhost-4200-2019-12-18-00_24_40.png
|-- sd.pdf
|-- sss.PNG
|-- supply formula.PNG
|-- synthetic rubber price.pdf
|-- thirdparty.PNG
|-- timeline-2.PNG
|-- timeline.PNG
|-- totamane2014.pdf
|-- web
    |-- .editorconfig
    |-- .firebase
        |-- hosting.ZGlzdA.cache
    |-- .firebaserc
    |-- .gitignore
    |-- CHANGELOG.md
    |-- CONTRIBUTING.md
    |-- ISSUE_TEMPLATE.md
    |-- LICENSE
    |-- README.md
    |-- angular.json
    |-- e2e
        |-- app.e2e-spec.ts
        |-- app.po.ts
        |-- tsconfig.e2e.json
    |-- firebase.json
    |-- karma.conf.js
    |-- package.json
    |-- protractor.conf.js
    |-- src
        |-- app
            |-- _nav.ts
            |-- app.component.css
            |-- app.component.spec.ts
            |-- app.component.ts
            |-- app.module.ts
            |-- app.routing.ts
            |-- containers
                |-- default-layout
                    |-- default-layout.component.html
                    |-- default-layout.component.ts
                    |-- index.ts
                |-- index.ts
            |-- httpservice.service.ts
            |-- models
                |-- parameter-value
                |-- prediction-model.ts
            |-- views
                |-- base
                    |-- base-routing.module.ts
                    |-- base.module.ts
                    |-- cards.component.html
                    |-- cards.component.ts
                    |-- carousels.component.html
                    |-- carousels.component.ts
                    |-- collapses.component.html
                    |-- collapses.component.ts
                    |-- forms.component.html
                    |-- forms.component.ts
                    |-- paginations.component.html
                    |-- paginations.component.ts
                    |-- popovers.component.html
                    |-- popovers.component.ts
                    |-- progress.component.html
                    |-- progress.component.ts
                    |-- switches.component.html
                    |-- switches.component.ts
                    |-- tables.component.html
                    |-- tables.component.ts
                    |-- tabs.component.html
                    |-- tabs.component.ts
                    |-- tooltips.component.html
                    |-- tooltips.component.ts
                |-- buttons
                    |-- brand-buttons.component.html
                    |-- brand-buttons.component.ts
                    |-- buttons-routing.module.ts
                    |-- buttons.component.html
                    |-- buttons.component.ts
                    |-- buttons.module.ts
                    |-- dropdowns.component.css
                    |-- dropdowns.component.html
                    |-- dropdowns.component.ts
                |-- chartjs
                    |-- chartjs-routing.module.ts
                    |-- chartjs.component.html
                    |-- chartjs.component.ts
                    |-- chartjs.module.ts
                |-- dashboard
                    |-- dashboard-routing.module.ts
                    |-- dashboard.component.html
                    |-- dashboard.component.ts
                    |-- dashboard.module.ts
                |-- error
                    |-- 404.component.html
                    |-- 404.component.ts
                    |-- 500.component.html
                    |-- 500.component.ts
                |-- forecast
                    |-- forecast-adjust
                        |-- forecast-adjust.component.html
                        |-- forecast-adjust.component.ts
                    |-- forecast-explore
                        |-- forecast-explore.component.html
                        |-- forecast-explore.component.ts
                    |-- forecast-routing.module.ts
                    |-- forecast-variable
                        |-- forecast-explore.component.ts
                        |-- forecast-variable.component.html
                    |-- forecast.component.html
                    |-- forecast.component.ts
                    |-- forecast.module.ts
                    |-- time-series-chart.ts
                |-- icons
                    |-- coreui-icons.component.html
                    |-- coreui-icons.component.ts
                    |-- flags.component.html
                    |-- flags.component.ts
                    |-- font-awesome.component.html
                    |-- font-awesome.component.ts
                    |-- icons-routing.module.ts
                    |-- icons.module.ts
                    |-- simple-line-icons.component.html
                    |-- simple-line-icons.component.ts
                |-- login
                    |-- login.component.html
                    |-- login.component.ts
                |-- notifications
                    |-- alerts.component.html
                    |-- alerts.component.ts
                    |-- badges.component.html
                    |-- badges.component.ts
                    |-- modals.component.html
                    |-- modals.component.ts
                    |-- notifications-routing.module.ts
                    |-- notifications.module.ts
                |-- register
                    |-- register.component.html
                    |-- register.component.ts
                |-- theme
                    |-- colors.component.html
                    |-- colors.component.ts
                    |-- theme-routing.module.ts
                    |-- theme.module.ts
                    |-- typography.component.html
                    |-- typography.component.ts
                |-- widgets
                    |-- widgets-routing.module.ts
                    |-- widgets.component.html
                    |-- widgets.component.ts
                    |-- widgets.module.ts
        |-- assets
            |-- .gitkeep
            |-- favicon.ico
            |-- img
                |-- avatars
                    |-- 1.jpg
                    |-- 2.jpg
                    |-- 3.jpg
                    |-- 4.jpg
                    |-- 5.jpg
                    |-- 6.jpg
                    |-- 7.jpg
                    |-- 8.jpg
        |-- environments
            |-- environment.prod.ts
            |-- environment.ts
        |-- index.html
        |-- main.ts
        |-- polyfills.ts
        |-- scss
            |-- _custom.scss
            |-- _variables.scss
            |-- style.scss
            |-- vendors
                |-- _variables.scss
                |-- chart.js
                    |-- chart.scss
        |-- test.ts
        |-- tsconfig.app.json
        |-- tsconfig.spec.json
        |-- typings.d.ts
    |-- tsconfig.json
    |-- tslint.json
|-- wits_en_trade_summary_allcountries_allyears.zip

```


## Conclusion

This project provides a comprehensive approach to predicting natural rubber export demand using advanced machine learning and deep learning techniques. With a robust backend, interactive frontend, and thorough documentation, it aims to deliver accurate predictions and valuable insights for stakeholders in the natural rubber industry.
