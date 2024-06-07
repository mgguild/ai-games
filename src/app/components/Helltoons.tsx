import React from "react";

const Helltoons= () => {
  return (
    
    <section
      id="helltoons"
      className="flex sm:pl-16 pl-1 sm:pr-16 pr-1 py-24 mt-6  flex-col md:flex-row bg-gradient-to-br from-yellow-200 to-red-300 border-8 border-white ">
        
        <div className="bg-white rounded-3xl leading-10">
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="mb-4">Welcome to the beta version of Helltoons: Card Clash, a card game designed for players aged 18 and above. Your privacy is important to us, and this Privacy Policy outlines how we handle your information while you enjoy our game. As this is a beta version, we do not require any personal details from players at this time. Please read this policy carefully to understand our practices regarding your information.</p>
                
            <h2 className="text-xl font-bold mb-2">Personal Information</h2>
            <ul className="list-disc list-inside mb-2">
                <li>We do not collect any personal information such as names, email addresses, or phone numbers from players.</li>
                <li>No registration or account creation is required to play Helltoons: Card Clash.</li>
            </ul>
            <h2 className="text-xl font-bold mb-2">Usage Data</h2>
            <ul className="list-disc list-inside mb-2">
                <li>During this beta phase, we do not track or store any usage data related to your gameplay, including but not limited to your in-game actions, preferences, or progress.</li>
            </ul>
            <h2 className="text-xl font-bold mb-2">Cookies and Tracking Technologies</h2>
            <ul className="list-disc list-inside mb-2">
                <li>We do not use cookies or any other tracking technologies to monitor your activity on our game.</li>
            </ul>
            <h2 className="text-xl font-bold mb-2">Data Security</h2>
            <ul className="list-disc list-inside mb-2">
                <li>Although we do not collect personal information, we are committed to ensuring the security of any data related to our game. Our development environment and any associated infrastructure are secured to prevent unauthorized access.</li>
            </ul>
            <h2 className="text-xl font-bold mb-2">Third-Party Services</h2>
            <ul className="list-disc list-inside mb-2">
                <li>Our app collects unique device identifiers, such as the md5 of ANDROID_ID, to provide essential functionalities through PlayFab services. This includes but is not limited to user authentication, data synchronization, and game analytics. The data is securely transmitted to and processed by PlayFab, a service provided by Microsoft, in compliance with privacy and data protection regulations. Please be aware that we have no control over the content and practices of PlayFab, and cannot accept responsibility and liability for their respective privacy policies.</li>
            </ul>
            <p className="mb-4">We may update our Privacy Policy from time to time or once the full version releases. Continued use of the game after changes are made signifies your acceptance of the new policy. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
            <p className="mb-4">This policy is effective as of June 2024.</p>
        </div>
        </div>
    </section>
  );
};

export default Helltoons;