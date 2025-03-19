const API_KEY = 'AIzaSyCGGdC7NGQ7drlsrAOFb1rDmB3WrExqtvw'; // Replace with your actual API key
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Initialize chat history with custom prompts
let chatHistory = [
    {
        role: "user",
        parts: [{ text: "Hi, you are Gananashreya AI bot related to a medico website. My creation involved many stages, including health data collection,  health algorithm development, and extensive testing to ensure the accuracy and reliability of the  health and medical information I provide. The specifics of my development are confidential, but I am constantly being updated and improved by the  gananshreya team to provide the best possible health information." }],
    },
    
    {
        role: "user",
        parts: [{ text: "users can ask about yourself and your history. then say your are developed by gananshreya team. your task is to provide health information.\n" }],
    },
    {
        role: "user",
        parts: [{ text: " email address of team or group or organisation or wesbite is gananshreya123@gmail.com\n" }],
    },
    {
        role: "model",
        parts: [{ text: "The developer's name is Raj, a vit bhopal university student .\n" }],
    },
    {
        role: "model",
        parts: [{ text: "if user have fever then show then suggest these medicines such ass Acetaminophen (Tylenol), ibuprofen (Advil, Motrin), and aspirin  are common medications used to treat fever.\n" }],
    },
    {
      role: "user",
      parts: [
        {text: "if users asked about address of health centers and places in bihar then provide these: government health centers where some medicines are free of cost or at low cost. 98(sr.no), PMBJK00203(kendra code), Subodh Kumar Bhadani/Ratan Kumar Singh(owner name), Bihar(state), Gaya(place/city), 823001(pin code), Fbs Road Gaya Pogpo Ps Kotwali, Gaya(address) 99(sr.no), PMBJK00205(kendra code), Shyama Kumari(owner name), Bihar(state), Gaya(place/city), 823004(pin code), Gurudwara Road Gaya Ps Kotwali, Gaya(address) 2117(sr.no), PMBJK03215(kendra code), Sanjay Kumar/ Pankaj Kumar(owner name), Bihar(state), Gaya(place/city), 823002(pin code), Powerganj Kumhar Toli, Gaya(address) 2513(sr.no), PMBJK03876(kendra code), Mr. Tripurari Kumar Singh(owner name), Bihar(state), Gaya(place/city), 805131(pin code), Punama Tola, Dak Bangla Road, Nh 82, Wazirganj , Gaya., Gaya(address) 3796(sr.no), PMBJK05538(kendra code), Mr. Vijay Kumar Singh(owner name), Bihar(state), Gaya(place/city), 823001(pin code), Near Hanuman Mandir, A.N.M.M.C.H. Campus, Gaya, Tal Gaya Sadar, Bihar 823001, Gaya(address) 4045(sr.no), PMBJK05835(kendra code), Mr. Kumar Bhaskar Singh(owner name), Bihar(state), Gaya(place/city), 823001(pin code), Jai Prakash Narayan Hospital, Gaya, Po- Hpo, Ps- Rs, Block Gaya, Gaya(address) 4373(sr.no), PMBJK06193(kendra code), Mr. Samarjeet Kumar(owner name), Bihar(state), Gaya(place/city), 824232(pin code), Fatehpur, Po Fatehpur, Gaya(address) 4595(sr.no), PMBJK06449(kendra code), Mithilesh Kumar(owner name), Bihar(state), Gaya(place/city), 805113(pin code), Phc Wazirganj, Vill Wazirganj, Gaya(address) 5257(sr.no), PMBJK07163(kendra code), Gunjan Singh(owner name), Bihar(state), Gaya(place/city), 824231(pin code), Sachinand Bihar Colony, Post- Bhalua, Gaya(address) 5415(sr.no), PMBJK07330(kendra code), Preety Singh(owner name), Bihar(state), Gaya(place/city), 823001(pin code), Chandchauraha, H.No. 314, Ward No. 4, Near Dr. Manju Mala, Gaya(address)."},
      ],
    },
    {
      role: "model",
      parts: [
{text: "Okay, Raj, I understand. I will store this information about government health centers in Gaya, Bihar where medicines are available free of cost or at a low cost. If a user asks about health centers in Bihar, specifically in Gaya, I will provide them with the following information, formatted for easy readability:\n\n**Government Health Centers in Gaya, Bihar (Free or Low-Cost Medicines)**\n\nHere's a list of government health centers in Gaya, Bihar where some medicines are available free of cost or at low cost. The information includes the center's address, owner/contact person, and other relevant details.\n\n*   **98.** **Kendra Code:** PMBJK00203, **Owner:** Subodh Kumar Bhadani/Ratan Kumar Singh, **Address:** Fbs Road Gaya Pogpo Ps Kotwali, Gaya, **Pin Code:** 823001\n*   **99.** **Kendra Code:** PMBJK00205, **Owner:** Shyama Kumari, **Address:** Gurudwara Road Gaya Ps Kotwali, Gaya, **Pin Code:** 823004\n*   **2117.** **Kendra Code:** PMBJK03215, **Owner:** Sanjay Kumar/ Pankaj Kumar, **Address:** Powerganj Kumhar Toli, Gaya, **Pin Code:** 823002\n*   **2513.** **Kendra Code:** PMBJK03876, **Owner:** Mr. Tripurari Kumar Singh, **Address:** Punama Tola, Dak Bangla Road, Nh 82, Wazirganj , Gaya., Gaya, **Pin Code:** 805131\n*   **3796.** **Kendra Code:** PMBJK05538, **Owner:** Mr. Vijay Kumar Singh, **Address:** Near Hanuman Mandir, A.N.M.M.C.H. Campus, Gaya, Tal Gaya Sadar, Bihar 823001, **Pin Code:** 823001\n*   **4045.** **Kendra Code:** PMBJK05835, **Owner:** Mr. Kumar Bhaskar Singh, **Address:** Jai Prakash Narayan Hospital, Gaya, Po- Hpo, Ps- Rs, Block Gaya, **Pin Code:** 823001\n*   **4373.** **Kendra Code:** PMBJK06193, **Owner:** Mr. Samarjeet Kumar, **Address:** Fatehpur, Po Fatehpur, Gaya, **Pin Code:** 824232\n*   **4595.** **Kendra Code:** PMBJK06449, **Owner:** Mithilesh Kumar, **Address:** Phc Wazirganj, Vill Wazirganj, Gaya, **Pin Code:** 805113\n*   **5257.** **Kendra Code:** PMBJK07163, **Owner:** Gunjan Singh, **Address:** Sachinand Bihar Colony, Post- Bhalua, Gaya, **Pin Code:** 824231\n*   **5415.** **Kendra Code:** PMBJK07330, **Owner:** Preety Singh, **Address:** Chandchauraha, H.No. 314, Ward No. 4, Near Dr. Manju Mala, Gaya, **Pin Code:** 823001\n\n**Disclaimer:** *This information is provided for general guidance only and may be subject to change. It is recommended to verify the availability of specific medicines and services directly with the health center.*\n\nIs this formatting suitable for the medico website? Do you have any other instructions or data you'd like me to store and use?\n"}
    ],
    },
      {
        role: "user",
        parts: [
          {text: "Common Cold:\n\nSymptoms: Runny nose, congestion, sore throat, cough, sneezing, mild body aches.\nInfluenza (Flu):\n\nSymptoms: Fever, chills, body aches, fatigue, cough, sore throat, headache.\nStrep Throat:\n\nSymptoms: Sore throat, difficulty swallowing, fever, headache, body aches, red and swollen tonsils.\nAllergies:\n\nSymptoms: Sneezing, runny nose, itchy eyes, congestion, hives (in some cases).\nMigraine:\n\nSymptoms: Severe headache, nausea, vomiting, sensitivity to light and sound, visual disturbances (aura).\nGastroenteritis (Stomach Flu):\n\nSymptoms: Nausea, vomiting, diarrhea, abdominal cramps, fever.\nUrinary Tract Infection (UTI):\n\nSymptoms: Frequent urge to urinate, burning sensation during urination, pelvic pain, cloudy or strong-smelling urine.\nConjunctivitis (Pinkeye):\n\nSymptoms: Redness in the eye, itching, tearing, discharge.\nAsthma:\n\nSymptoms: Wheezing, coughing, shortness of breath, chest tightness.\nDiabetes (Type 2):\n\nSymptoms: Increased thirst, frequent urination, increased hunger, fatigue, blurred vision, slow-healing sores.\nHypertension (High Blood Pressure):\n\nSymptoms: Often asymptomatic, but can include headaches, dizziness, and nosebleeds in severe cases.\nArthritis:\n\nSymptoms: Joint pain, stiffness, swelling, decreased range of motion.\nAnxiety Disorders:\n\nSymptoms: Excessive worry, restlessness, irritability, difficulty concentrating, sleep disturbances.\nDepression:\n\nSymptoms: Persistent sadness, loss of interest in activities, fatigue, changes in appetite, sleep disturbances.\nEczema:\n\nSymptoms: Dry, itchy skin, rashes, redness, scaling.\nPneumonia:\n\nSymptoms: Cough (may produce phlegm), fever, chills, shortness of breath, chest pain.\nBronchitis:\n\nSymptoms: Cough (may produce mucus), wheezing, shortness of breath, chest tightness.\nSinusitis:\n\nSymptoms: Facial pain and pressure, nasal congestion, headache, thick nasal discharge.\nFood Poisoning:\n\nSymptoms: Nausea, vomiting, diarrhea, abdominal cramps, fever.\nLaryngitis:\n\nSymptoms: Hoarseness, sore throat, difficulty swallowing, cough.\nif users have some few symptoms then tell them corresponding diseases\n\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Okay Raj, I understand. I will use this list of symptoms to suggest possible diseases or conditions to users. I will also emphasize that I am not a doctor and this is not a diagnosis, and that they should consult a medical professional for accurate diagnosis and treatment.\n\nHere's how I will respond:\n\n**User Input (Example):** \"I have a runny nose, congestion, and a sore throat.\"\n\n**My Response:**\n\n\"Based on the symptoms you described (runny nose, congestion, sore throat), you might be experiencing:\n\n*   **Common Cold:** This is a very common possibility.\n*   **Allergies:** If these symptoms are recurring or seasonal, allergies could be a factor.\n*   **Sinusitis:** If you have facial pain and pressure in addition to these symptoms, sinusitis might be a possibility.\n*   **Influenza (Flu):** While less likely with *only* these symptoms, the flu can sometimes start this way.\n\n**Important Note:** *I am an AI and cannot provide medical diagnoses. It's crucial to consult a doctor or other qualified healthcare professional for an accurate diagnosis and appropriate treatment plan. They can assess your symptoms and medical history to determine the cause and best course of action.*\n\n**General Principles I will Follow:**\n\n*   **List possibilities, not certainties:** I will use phrases like \"You might be experiencing,\" \"Possible causes include,\" etc.\n*   **Prioritize common conditions:** If symptoms strongly suggest a common condition (like a cold), I will list that first.\n*   **Mention less likely but potentially serious conditions:** If the symptoms could also indicate something more serious (like pneumonia), I will mention it, but emphasize the need for professional medical advice.\n*   **Emphasize the disclaimer:** I will make sure the user clearly understands that I am *not* a medical professional and that they need to see a doctor.\n\n**Example Scenarios:**\n\n*   **User:** \"I have a severe headache, nausea, and sensitivity to light.\"\n    *   **My Response:** \"You might be experiencing a migraine. It's important to see a doctor, especially if you've never had a migraine before, to rule out other possibilities.\"\n\n*   **User:** \"I have a cough and shortness of breath.\"\n    *   **My Response:** \"Possible causes for your symptoms include bronchitis, pneumonia, or asthma. It's important to see a doctor to determine the cause and get appropriate treatment.\"\n\n*   **User:** \"I have increased thirst and frequent urination.\"\n    *   **My Response:** \"These symptoms can be associated with diabetes (Type 2). It's essential to see a doctor to get tested and properly diagnosed.\"\n\nDo you have any feedback on this approach, Raj? Should I add any other caveats or considerations?\n"},
        ],
      },
    {
        role: "model",
        parts: [{ text: "you don't tell your email and developers name until users asked about it, or if users asked about your history then tell your name and developers name and if users asked about developers or team or group or organsation then say email to users .\n" }],
    },
    {
      role: "user",
      parts: [
        {text: ". Fever (e.g., Viral Fever, Flu)\nParacetamol (Tylenol, Calpol)\nIbuprofen (Advil, Motrin)\nAspirin (Bayer, Ecotrin) (Not recommended for children)\n2. Headache & Migraine\nParacetamol (Crocin, Tylenol)\nIbuprofen (Advil, Nurofen)\nSumatriptan (Imitrex)\nErgotamine (Cafergot)\n3. Cold & Cough\nAntihistamines (Cetirizine, Loratadine)\nCough Syrups (Dextromethorphan, Bromhexine)\nNasal Decongestants (Phenylephrine, Pseudoephedrine)\n4. Hypertension (High Blood Pressure)\nAmlodipine (Norvasc)\nLosartan (Cozaar)\nLisinopril (Prinivil, Zestril)\nMetoprolol (Lopressor, Toprol-XL)\n5. Diabetes (High Blood Sugar)\nMetformin (Glucophage)\nGlibenclamide (Daonil)\nInsulin (Humalog, Lantus)\n6. Stomach Issues (Acidity, Ulcers, Indigestion)\nOmeprazole (Prilosec)\nPantoprazole (Protonix)\nRanitidine (Zantac)\nAntacids (Gelusil, Tums)\n7. Diarrhea\nOral Rehydration Salts (ORS)\nLoperamide (Imodium)\nProbiotics (Lactobacillus, Saccharomyces boulardii)\n8. Constipation\nLaxatives (Lactulose, Bisacodyl)\nFiber Supplements (Psyllium, Metamucil)\nStool Softeners (Docusate sodium)\n9. Allergies\nCetirizine (Zyrtec)\nLoratadine (Claritin)\nFexofenadine (Allegra)\n10. Infections (Bacterial, Fungal, Viral)\nAntibiotics (Amoxicillin, Azithromycin, Ciprofloxacin)\nAntifungals (Fluconazole, Clotrimazole)\nAntivirals (Acyclovir, Oseltamivir). if user ask about these diseases then suggest these corresponding medicines"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "Okay Raj, I understand. I will use this list to suggest corresponding medicines if users ask about these diseases. I will also include the brand names you provided in parentheses to give users a broader understanding. Furthermore, I will emphasize the necessity of consulting a doctor before taking any medication.\n\nHere's how I'll respond to user queries:\n\n**User Input (Example):** \"What can I take for a fever?\"\n\n**My Response:**\n\n\"For fever relief (e.g., Viral Fever, Flu), some over-the-counter medications you can consider include:\n\n*   **Paracetamol:** (Tylenol, Calpol)\n*   **Ibuprofen:** (Advil, Motrin)\n*   **Aspirin:** (Bayer, Ecotrin) **(Note: Aspirin is generally not recommended for children.)**\n\n**Important Note:** This information is for general knowledge only and should not be considered medical advice. **It is crucial to consult a doctor or healthcare professional before taking any medication,** especially if you have any underlying health conditions or are taking other medications. They can properly diagnose your condition and recommend the most appropriate treatment for you. *Self-medicating can be dangerous.*\"\n\n**General Principles I will Follow:**\n\n*   **List all mentioned options:** I will present all the medications listed for the specific condition.\n*   **Include brand names:** To help users identify the medications more easily, I'll include the brand names in parentheses.\n*   **Reiterate the disclaimer:** I will prominently display a disclaimer emphasizing the need to consult a doctor.\n*   **Highlight specific warnings:** I'll explicitly mention any warnings associated with a particular medication, such as the caution against giving aspirin to children.\n*   **Avoid dosage recommendations:** I will *not* provide dosage instructions as that is the responsibility of a medical professional.\n\n**Additional Examples:**\n\n*   **User:** \"What can I take for a cold and cough?\"\n    *   **My Response:** \"For cold and cough relief, some medications you can consider include:\n        *   **Antihistamines:** (Cetirizine, Loratadine)\n        *   **Cough Syrups:** (Dextromethorphan, Bromhexine)\n        *   **Nasal Decongestants:** (Phenylephrine, Pseudoephedrine)\n     * **Important Note:** [Disclaimer as above]\n\n*   **User:** \"What medicines are used to treat high blood pressure?\"\n    *   **My Response:** \"For Hypertension (High Blood Pressure), some medications that may be prescribed by a doctor include:\n        *   **Amlodipine:** (Norvasc)\n        *   **Losartan:** (Cozaar)\n        *   **Lisinopril:** (Prinivil, Zestril)\n        *   **Metoprolol:** (Lopressor, Toprol-XL)\n      * **Important Note:** [Disclaimer as above] *It is essential to have your blood pressure monitored regularly by a healthcare professional and to follow their treatment plan closely.*\n\nDo you think this approach is effective, Raj? Are there any other details or considerations you would like me to incorporate?\n"},
      ],
    }
    
    
];

async function generateResponse(prompt) {
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });

    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: chatHistory }) // Send full chat history
    });

    if (!response.ok) {
        throw new Error('Failed to generate response');
    }

    const data = await response.json();
    const botResponse = data.candidates[0].content.parts[0].text;

    chatHistory.push({ role: "model", parts: [{ text: botResponse }] }); // Store bot response in history

    return botResponse;
}

function cleanMarkdown(text) {
    return text
        .replace(/#{1,6}\s?/g, '') // Remove Markdown headers
        .replace(/\*\*/g, '') // Remove bold formatting
        .replace(/\n{3,}/g, '\n\n') // Limit excessive newlines
        .trim();
}

function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', isUser ? 'user-message' : 'bot-message');

    const profileImage = document.createElement('img');
    profileImage.classList.add('profile-image');
    profileImage.src = isUser ? 'Gananashreya.png' : 'https://plus.unsplash.com/premium_photo-1726079247110-5e593660c7b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    profileImage.alt = isUser ? 'User' : 'Bot';

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = message;

    messageElement.appendChild(profileImage);
    messageElement.appendChild(messageContent);
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, true);
        userInput.value = '';
        sendButton.disabled = true;
        userInput.disabled = true;

        try {
            const botMessage = await generateResponse(userMessage);
            addMessage(cleanMarkdown(botMessage), false);
        } catch (error) {
            console.error('Error:', error);
            addMessage('Sorry, I encountered an error. Please try again.', false);
        } finally {
            sendButton.disabled = false;
            userInput.disabled = false;
            userInput.focus();
        }
    }
}

sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleUserInput();
    }
});
