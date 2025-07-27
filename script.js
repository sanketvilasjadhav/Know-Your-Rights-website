const infoData = {
  right1: `🇮🇳 Right to Equality (Articles 14–18)\n
The Right to Equality is the foundation of Indian democracy and ensures all individuals are treated equally before the law, regardless of caste, religion, race, gender, or place of birth.\n
✳️ Key Articles:
• Article 14 – Equality Before Law and Equal Protection of Laws.
• Article 15 – Prohibition of Discrimination based on religion, race, caste, sex, or place of birth.
• Article 16 – Equal Opportunity in Public Employment.
• Article 17 – Abolition of Untouchability.
• Article 18 – Abolition of Titles, except military or academic distinctions.`,

  right2: `🕊️ Right to Freedom (Articles 19–22)\n
Guarantees freedom of expression, association, movement, life, and liberty, allowing individuals to live with dignity and independence.\n
✳️ Key Articles:
• Article 19 – Six fundamental freedoms (speech, assembly, association, movement, residence, occupation).
• Article 20 – Protection against ex-post-facto laws, double jeopardy, and self-incrimination.
• Article 21 – Protection of Life and Personal Liberty, includes privacy, clean environment, healthcare, etc.
• Article 21A – Right to free and compulsory education for children (6–14 years).
• Article 22 – Protection against arbitrary arrest and detention.`,

  right3: `🚫 Right Against Exploitation (Articles 23–24)\n
Protects citizens from exploitation, especially of vulnerable groups such as children, women, and bonded laborers.\n
✳️ Key Articles:
• Article 23 – Prohibits human trafficking and forced or bonded labor (begar).
• Article 24 – Prohibits child labor under the age of 14 in hazardous environments.`,

  right4: `🕉️ Right to Freedom of Religion (Articles 25–28)\n
Grants every citizen the freedom to profess, practice, and propagate religion.\n
✳️ Key Articles:
• Article 25 – Freedom of conscience and practice of religion.
• Article 26 – Freedom to manage religious affairs and institutions.
• Article 27 – No taxes to promote any religion.
• Article 28 – No religious teaching in government educational institutions.`,

  right5: `📚 Cultural and Educational Rights (Articles 29–30)\n
Protects the culture, script, and education of minorities, ensuring their identity and values are preserved.\n
✳️ Key Articles:
• Article 29 – Right to conserve language, script, or culture; protection from discrimination in educational institutions.
• Article 30 – Right of minorities to establish and administer educational institutions of their choice.`,

  right6: `⚖️ Right to Constitutional Remedies (Article 32)\n
Called the "heart and soul" of the Constitution by Dr. B.R. Ambedkar. It empowers citizens to approach the Supreme Court or High Court for the enforcement of Fundamental Rights.\n
✳️ Types of Writs:
• Habeas Corpus – To release unlawful detention.
• Mandamus – To compel public officials to perform duties.
• Prohibition – To stop lower courts from acting beyond their powers.
• Certiorari – Supreme Court can take control of lower court decisions.
• Quo-Warranto – Challenges someone's claim to public office.`,

  sexual: `💼 Sexual Harassment at Workplace:

📜 Law: The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013

This law was enacted to protect women from sexual harassment in the workplace and create a safe and respectful environment.

🔹 What counts as harassment:
- Unwanted physical contact
- Sexual advances or demands
- Sexually-colored remarks or jokes
- Displaying pornography
- Any inappropriate physical, verbal, or visual behavior

🔹 Legal Provisions:
- Internal Complaints Committee (ICC) is mandatory for organizations with 10+ employees.
- Complaints must be addressed within 90 days.
- Both temporary and permanent workers are protected.

🎯 Goal: Ensure women feel safe and respected at their workplace.`,

  violence: `🏠 Domestic Violence:

📜 Law: The Protection of Women from Domestic Violence Act, 2005

Protects women from abuse in domestic settings, not just from husband but also from other relatives.

🔹 Types of abuse covered:
- Physical: Hitting, slapping, kicking
- Emotional: Verbal insults, humiliation, threats
- Sexual: Forced sexual acts
- Economic: Controlling money, denying resources

🔹 Who can file:
Any woman in a domestic relationship – wife, sister, daughter, mother.

🔹 Reliefs:
- Protection orders
- Residence rights
- Monetary compensation
- Child custody orders

🎯 Goal: Provide immediate and long-term safety and support for women facing abuse.`,

  marriage: `💍 Marriage and Divorce:

📜 Laws:
- Hindu Marriage Act, 1955
- Muslim Personal Law
- Special Marriage Act, 1954
- Divorce Act (for Christians)
- Parsi Marriage and Divorce Act, 1936

🔹 Rights in Marriage:
- Right to legal registration
- Right to maintenance and financial support
- Right to dignity and shared property

🔹 Divorce Rights:
- Mutual consent or fault-based divorce
- Grounds include cruelty, adultery, abandonment, and conversion
- Right to custody of children
- Right to remarry

🔹 Special Marriage Act:
Applies to interfaith or intercaste marriages with a secular legal process.

🎯 Goal: Protect dignity, rights, and legal remedies for both spouses.`,

  property: `🏡 Property Rights:

📜 Laws:
- Hindu Succession Act, 1956 (Amended 2005)
- Muslim Personal Law
- Indian Succession Act

🔹 Women's Rights:
- Equal rights in ancestral property (under Hindu law post-2005)
- Right to parental and spousal property
- Right to maintenance and residence even after separation

🔹 Under Muslim Law:
Women inherit but generally receive half the share compared to male relatives.

🔹 Additional Protections:
- Cannot be forcefully removed from matrimonial home
- Joint property is to be shared fairly

🎯 Goal: Ensure gender-equal property rights and financial independence for women.`
};

function showInfo(key) {
  document.getElementById('infoText').innerText = infoData[key];
  document.getElementById('infoModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('infoModal').style.display = 'none';
}
