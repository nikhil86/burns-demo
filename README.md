# 🧪 Playwright + Azure DevOps + Allure Framework

This repository demonstrates a complete JavaScript-based Playwright test automation framework with:

- ✅ Playwright (JavaScript)
- ✅ Page Object Model (POM)
- ✅ Environment-specific configurations with `.env` files
- ✅ Azure DevOps CI/CD pipeline
- ✅ Allure Reporting

---

## 📁 Project Structure

```
project-root/
├── .env
├── .env.staging
├── .env.production
├── package.json
├── playwright.config.js
├── pages/
│   └── GoogleHomePage.js
├── tests/
│   └── google.spec.js
├── utils/
│   └── envLoader.js
└── azure-pipelines/
    └── playwright-tests.yaml
```

---

## ⚙️ Setup Instructions

### 1. Install dependencies

```bash
npm install
npx playwright install --with-deps
```

### 2. Run Tests

```bash
npm test           # Default env
npm run test:staging
npm run test:prod
```

### 3. View Allure Report

```bash
npm run report
```

---

## 🚀 Azure DevOps Integration

### 1. Push the repo to GitHub

```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### 2. Setup CI in Azure DevOps

1. Go to Azure DevOps → Pipelines → Create Pipeline
2. Choose **GitHub** as your source
3. Authenticate and pick your repo
4. Select `azure-pipelines/playwright-tests.yaml`
5. Save and run

### 3. View Results

- Logs show Playwright test execution
- Artifacts tab includes `allure-report` for download

---

## 📦 Environment Configuration

Environment values are managed via `.env` files:

```
.env             → Default (dev)
.env.staging     → Staging config
.env.production  → Production config
```

You can switch environments via:

```bash
ENV=staging npx playwright test
```

---

## 📬 Questions?

Reach out or fork this repo to customize for your testing needs!
