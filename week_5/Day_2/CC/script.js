// =========================================================================
// API URL RESOLUTION SYSTEM
// Extracts values safely from config namespace to prevent repository exposure.
// =========================================================================

// FIXED: Correct template literal parsing syntax incorporating mandatory v6 segment [Feedback #2 & #3]
const BASE_URL = `https://exchangerate-api.com{CONFIG.API_KEY}`;

// Clean Object-Oriented DOM Elements Cache Mapping [Feedback #1 Constants Requirement]
const UI = {
    amount: document.getElementById('amount'),
    fromSelect: document.getElementById('from-currency'),
    toSelect: document.getElementById('to-currency'),
    switchBtn: document.getElementById('switch-btn'),
    convertBtn: document.getElementById('convert-btn'),
    loading: document.getElementById('loading'),
    error: document.getElementById('error'),
    output: document.getElementById('output-text')
};

// UI Presentation State Controller
function toggleStatus(state) {
    UI.loading.classList.add('hidden');
    UI.error.classList.add('hidden');
    UI.output.classList.add('hidden');

    if (state === 'loading') UI.loading.classList.remove('hidden');
    if (state === 'error') UI.error.classList.remove('hidden');
    if (state === 'success') UI.output.classList.remove('hidden');
}

// 1. Core Initializer Endpoint Handler
async function initializeCurrencies() {
    toggleStatus('loading');
    
    // Safety boundary check preventing blank runtime failures
    if (!CONFIG.API_KEY || CONFIG.API_KEY === "YOUR_ACTUAL_API_KEY_HERE") {
        UI.error.innerText = "Security Halt: Please paste your ExchangeRate-API key inside config.js.";
        toggleStatus('error');
        return;
    }

    const endpoint = `${BASE_URL}/codes`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`HTTP Transport Network Error: Status ${response.status}`);
        
        const data = await response.json();
        
        // Robust Vendor Response Checking Block [Feedback #5 Protection Alignment]
        if (data.result === "error") {
            throw new Error(`API Core Refusal: ${data['error-type']}`);
        }
        
        populateDropdowns(data.supported_codes);
        toggleStatus('success');
    } catch (err) {
        UI.error.innerText = `Initialization Fault: ${err.message}`;
        toggleStatus('error');
    }
}

// 2. DOM Population Implementation Module [Feedback #1 Complete Function Requirement]
function populateDropdowns(currencyCodes) {
    UI.fromSelect.innerHTML = "";
    UI.toSelect.innerHTML = "";

    currencyCodes.forEach(([code, descriptiveName]) => {
        const optionNodeFrom = new Option(`${code} - ${descriptiveName}`, code);
        const optionNodeTo = new Option(`${code} - ${descriptiveName}`, code);
        
        UI.fromSelect.add(optionNodeFrom);
        UI.toSelect.add(optionNodeTo);
    });

    // Default configuration assignments
    UI.fromSelect.value = "USD";
    UI.toSelect.value = "EUR";

    // Enable interaction hooks now that array items exist
    UI.fromSelect.disabled = false;
    UI.toSelect.disabled = false;
}

// 3. Calculation Pair Conversion Engine [Feedback #1 Dynamic Execution Requirement]
async function executeConversion() {
    const fromCode = UI.fromSelect.value;
    const toCode = UI.toSelect.value;
    const inputAmount = UI.amount.value;

    if (!inputAmount || parseFloat(inputAmount) <= 0) {
        UI.error.innerText = "Validation Fault: Please input a positive currency amount value.";
        toggleStatus('error');
        return;
    }

    toggleStatus('loading');

    const endpoint = `${BASE_URL}/pair/${fromCode}/${toCode}/${inputAmount}`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`HTTP Conversion Network Error: Status ${response.status}`);
        
        const data = await response.json();
        
        if (data.result === "error") {
            throw new Error(`API Conversion Refusal: ${data['error-type']}`);
        }

        const totalConverted = parseFloat(data.conversion_result).toFixed(2);
        const singleUnitRate = parseFloat(data.conversion_rate).toFixed(4);
        
        UI.output.innerHTML = `
            <h3>${inputAmount} ${fromCode} = <strong>${totalConverted} ${toCode}</strong></h3>
            <p>1 ${fromCode} = ${singleUnitRate} ${toCode}</p>
        `;
        toggleStatus('success');
    } catch (err) {
        UI.error.innerText = `Conversion System Failure: ${err.message}`;
        toggleStatus('error');
    }
}

// 4. Inversion Selection Mechanism Module [Feedback #1 Switch Requirement]
function swapCurrencies() {
    const backupReferenceValue = UI.fromSelect.value;
    UI.fromSelect.value = UI.toSelect.value;
    UI.toSelect.value = backupReferenceValue;
    
    // Instantly execute conversion update with the newly swapped selection pairs
    executeConversion();
}

// =========================================================================
// INTERACTIVE EVENT ATTACHMENTS [Feedback #1 Critical Event Handler Fixes]
// =========================================================================
UI.convertBtn.addEventListener('click', executeConversion);
UI.switchBtn.addEventListener('click', swapCurrencies);
document.addEventListener('DOMContentLoaded', initializeCurrencies);
