

# **An Expert Report on Static Code Analysis and Software Composition Analysis**

### **Executive Summary**

In the landscape of modern software development, security has evolved from a final-stage audit to an integral, continuous process. This paradigm shift, often referred to as "shifting left," is a strategic imperative driven by the need for speed, efficiency, and resilience against increasingly sophisticated cyber threats.1 Within this context, Static Application Security Testing (SAST) and Software Composition Analysis (SCA) emerge as two foundational pillars of a proactive security strategy. While SAST meticulously secures an organization's custom-written code by analyzing it without execution, SCA addresses the growing risk introduced by open-source and third-party components, which form a significant portion of modern applications. A robust and mature security posture is not achieved by choosing one over the other; rather, it is established through the synergistic integration of both methodologies, creating a comprehensive defense that covers both proprietary and external code.

---

### **Part I: The Foundation of Modern Application Security**

#### **The "Shift-Left" Imperative in Software Development**

The rapid adoption of Agile and DevOps methodologies has fundamentally reshaped the software development lifecycle (SDLC). In this new environment, where code is committed and deployed multiple times a day, the traditional model of security—a manual, late-stage audit—is no longer viable.1 This old approach creates significant bottlenecks, slows down development, and introduces substantial risk, as vulnerabilities discovered late in the cycle are far more costly and time-consuming to fix. This incompatibility has led to the widespread adoption of the "shift-left" philosophy.

Shifting left is a strategic approach that integrates security practices and testing into the earliest phases of the SDLC.1 Instead of waiting for a completed application to be tested, security becomes a shared responsibility that is addressed as code is being written. The business case for this approach is compelling. By detecting and remediating security flaws early on, organizations can save significant time and resources.1 A vulnerability that might cost thousands of dollars and weeks to fix in a production environment could have been prevented with a simple code change in the development environment. This proactive stance not only prevents costly breaches but also ensures that the continuous delivery model remains secure and uninterrupted.5

#### **Overview of SAST and SCA**

SAST and SCA are two distinct yet highly complementary security testing methodologies that embody the "shift-left" principle.

Static Application Security Testing (SAST), or static analysis, is a methodology that analyzes an application’s source code, bytecode, or binary code to find security vulnerabilities without executing the program.7 It is a proactive measure for securing the application's proprietary or first-party code, which is the code written by the organization's developers.10 SAST provides an internal, "white-box" view of the application, examining its structure and logic from the inside out to find flaws before the code is even compiled or run.1

Software Composition Analysis (SCA) is a practice focused on identifying and managing open-source software (OSS) components and third-party dependencies within a custom-built application.9 In contrast to SAST's focus on proprietary code, SCA addresses the security and legal risks introduced by external components, which often make up the majority of a modern application.4 SCA is a critical tool for maintaining the security and integrity of the software supply chain.13

---

### **Part II: Static Application Security Testing (SAST)**

#### **Core Concepts and Functionality**

SAST’s primary objective is to analyze an application's internal structure for security vulnerabilities.7 This is why it is often called "white-box" testing; it requires access to the source code to perform its analysis.1 The methodology is designed to find a broad range of security flaws that could make an application susceptible to attack. These include well-known vulnerabilities such as injection flaws (e.g., SQL injection), Cross-Site Scripting (XSS), and buffer overflows.1 It also detects more subtle issues like insecure cryptography, sensitive data exposure, broken authentication, and hardcoded credentials.1 By operating on a static codebase, SAST provides an early-stage analytical approach, making it an ideal tool for proactive security measures.1

#### **The SAST Analysis Engine: A Technical Walkthrough**

The effectiveness of SAST tools lies in their sophisticated analysis engines, which perform a series of technical steps to understand and evaluate code.

The process begins with **Code Analysis**, where the tool parses the entire codebase, including source code, bytecode, and binary code.4 The initial technical step is

**parsing the code**. This involves:

* **Lexical Analysis:** The code is broken down into a series of tokens, such as keywords, identifiers, and operators.  
* **Syntactic Analysis:** The tool uses the programming language's grammar rules to understand the structure of the code, often creating a parse tree.  
* **Semantic Analysis:** The tool interprets the code to understand the meanings and relationships between various components.4

After parsing, the tool constructs an **Abstract Syntax Tree (AST)**. The AST is a tree-based representation of the code's syntactic structure, with each node representing a construct in the code. This tree structure simplifies the process of navigating the code, analyzing relationships, and identifying common coding patterns.4

The SAST tool then performs **Flow Analysis** to trace the movement of data and execution. **Control Flow Analysis (CFA)** examines how the code executes, focusing on conditional statements and loops. By mapping these execution paths, the tool can identify logic flaws that might allow an attacker to bypass security checks or manipulate program flow.15

**Data Flow Analysis (DFA)** tracks how data moves through variables, functions, and components, helping to identify potential leaks or improper handling of data.2 A specialized and powerful form of DFA is

**Taint Analysis**. This technique tracks "tainted" or untrusted data, such as user input, from its entry point into the application (the "source") to where it is used in a potentially dangerous way (the "sink").2 By checking if the data is properly sanitized or validated along its path, taint analysis can pinpoint vulnerabilities like SQL injection and XSS.

Once the analysis is complete, the SAST tool generates a detailed report that lists identified vulnerabilities, provides their location in the code (often down to the line number), assigns severity levels, and offers recommendations for remediation.4

#### **Strategic Benefits of SAST**

SAST’s proactive nature provides significant strategic advantages. Its ability to detect vulnerabilities early in the SDLC is a major benefit, as it saves substantial time and resources by preventing issues from becoming more complex and costly to fix later on.1

By integrating into development environments like an IDE or CI/CD pipeline, SAST empowers developers with real-time feedback.3 This immediate, contextual guidance helps developers take ownership of security, fosters a security-first mindset, and builds a culture where secure coding is a core practice rather than a compliance afterthought.3

SAST also plays a critical role in governance and compliance. It helps organizations enforce secure coding standards and meet regulatory requirements by providing an auditable record of security analysis for an application's proprietary codebase.2

#### **Challenges and Nuances of SAST**

Despite its benefits, SAST has significant challenges, most notably the issue of **false positives**.10 False positives are alerts that incorrectly identify a security vulnerability when, in reality, the flagged code poses no practical risk.20 The root cause of this high rate of inaccuracy is the static nature of the analysis. A SAST tool examines code patterns and flows without any understanding of the application's runtime context. It cannot determine if a flagged code path is actually reachable, if compensating controls exist, or if the code is only used in a test environment.20

This high volume of irrelevant alerts creates a profound operational and cultural challenge. Developers can experience "alert fatigue," leading them to ignore security tool outputs and potentially overlook real, critical vulnerabilities.19 This erosion of trust in the tool creates friction between security and development teams and slows down the entire development process as engineers waste time triaging findings that are not actual threats.20

Other limitations include SAST’s inability to detect vulnerabilities that are only visible during runtime, such as flaws in business logic or issues caused by incorrect configuration. Moreover, SAST is designed to analyze proprietary code and does not address risks introduced by third-party or open-source components.2

---

### **Part III: Software Composition Analysis (SCA)**

#### **Core Concepts and Functionality**

SCA is a critical practice for modern software engineering, providing visibility and control over the third-party components that make up a significant portion of modern applications.12 SCA tools work like a screening agent, identifying and documenting every software component in an application to manage potential vulnerabilities.13 SCA focuses on three primary areas of risk:

* **Vulnerabilities:** SCA scans components against databases of known security flaws to identify and manage publicly disclosed vulnerabilities.13  
* **License Compliance:** SCA identifies the licenses of all components in use, helping organizations adhere to legal requirements and avoid liabilities associated with licenses that restrict commercial use.13  
* **Software Supply Chain Integrity:** Beyond vulnerabilities, SCA helps identify risks like outdated dependencies, malicious packages, or typosquatting.13

#### **The SCA Analysis Engine: A Deep Dive**

The SCA analysis process is a multi-step workflow. It begins with **component identification**, where the tool scans the codebase to detect direct and transitive dependencies.14 This is often done by parsing definition files or manifests (e.g.,

requirements.txt, gemfile) to extract a list of dependencies. More advanced tools use techniques like file fingerprinting and code signature analysis to uncover dependencies that may be hidden or referenced in non-standard ways.14

Once components are identified, the tool cross-references them against continuously updated **vulnerability databases** such as Common Vulnerabilities and Exposures (CVE) and Open Source Vulnerabilities (OSV) to identify known security flaws.13 The vulnerability data is then used to generate a detailed report with severity ratings and remediation guidance.13

A key function of SCA is the generation of a **Software Bill of Materials (SBOM)**.13 An SBOM is a complete, detailed inventory of all open-source components, their versions, and licenses used in a software product.14 It is a foundational element for managing software supply chain risks, providing transparency and enabling organizations to trace component origins.14 Some SBOMs can also include a companion file called a Vulnerability Exploitability eXchange (VEX), which provides additional context about the vulnerabilities found.14

#### **Strategic Benefits of SCA**

SCA provides a robust defense against the growing threat of software supply chain attacks. Given that modern applications are heavily reliant on third-party components, SCA is a proactive defense that helps eliminate vulnerabilities before they can be exploited.4

SCA's ability to automate license compliance checks is a major advantage, as it helps organizations avoid the significant legal risks and liabilities that can arise from improper open-source usage.14 By providing continuous monitoring, SCA tools also alert organizations to newly discovered vulnerabilities in components that are already in use, enabling a quick and proactive response to emerging threats.13

#### **Challenges and Nuances of SCA**

The effectiveness of an SCA program is fundamentally tied to its reliance on external data sources, primarily vulnerability databases.27 This reliance makes SCA inherently reactive. A newly discovered, "zero-day" vulnerability will not be flagged by an SCA tool until it has been added to a vulnerability database. This can create a window of exposure where an application is vulnerable but the tool's database is not yet aware of the threat.

SCA also faces challenges in accurately identifying all dependencies. If a tool fails to identify a component or a vulnerability database is incomplete, it can result in a **false negative**—a real vulnerability that goes undetected.10 The complexity of modern applications, with their deep and intertwined chains of direct and transitive dependencies, makes comprehensive identification a difficult technical challenge.14 The effectiveness of an SCA tool is therefore measured not just by its ability to scan, but by its data accuracy, its ability to find every component (including hidden ones), and the quality and completeness of the vulnerability data it consumes.28

---

### **Part IV: Synergy and Strategic Implementation**

#### **SAST vs. SCA: A Complementary Approach**

SAST and SCA are not competing methodologies but rather two essential and complementary components of a comprehensive application security strategy.9 They address fundamentally different problems and operate on different types of code.17

The core difference is their focus: **SAST analyzes proprietary, custom-written code**, while **SCA governs open-source and third-party components**.9 SAST's remediation process involves writing more secure code or addressing security weaknesses in the internal codebase, whereas SCA's remediation typically involves patching vulnerabilities or upgrading to a more secure version of a third-party component.11 By combining both tools, organizations achieve a more comprehensive security posture that addresses risks from both internal development and external supply chains.9

A key difference in their operation is speed, which directly influences their optimal placement in a CI/CD pipeline. SCA scans are generally fast, often running in seconds, with a low impact on the build process.11 This makes them ideal for running on every code commit or pull request, providing near-instant feedback on any new dependencies. Traditional SAST, on the other hand, can be more time-consuming, especially for large codebases.11 Therefore, a pragmatic implementation strategy might use SAST for lightweight scans on every commit for real-time feedback, and schedule deeper, more comprehensive scans for less frequent triggers, such as nightly builds or before a pre-release candidate is staged.2 This tiered approach maximizes the value of each tool while avoiding disruptions to the developer's daily workflow.

#### **Integrating SAST and SCA into a Modern Workflow**

The most effective way to leverage SAST and SCA is to integrate them seamlessly into a modern DevSecOps workflow.3 This requires a clear, step-by-step approach.

1. **Define a Security Foundation:** Begin by clearly articulating secure coding policies and compliance requirements (e.g., OWASP Top 10, GDPR, HIPAA).16 Inventory the organization's tech stack to understand the languages, frameworks, and tools in use.16  
2. **Select the Right Tools:** Choose tools that align with the organization's specific needs, considering factors like language support, seamless integration with existing CI/CD pipelines and IDEs, and the ability to provide actionable remediation guidance.9  
3. **Configure CI/CD Integration:** Integrate both SAST and SCA tools into the CI/CD pipeline to enable continuous, automated security checks on every code commit or pull request.5  
4. **Baseline and Monitor:** Conduct initial baseline scans with both tools to identify and prioritize existing vulnerabilities. Then, enable continuous monitoring to catch new issues as they are introduced.9  
5. **Automate Feedback Loops and Remediate:** Automate feedback to developers by providing real-time alerts and detailed reports directly in their workflows.9 Establish a clear remediation process that tracks issues from discovery to resolution.1

#### **Best Practices for Maximizing Value**

To overcome the challenges associated with SAST and SCA and to maximize their value, several best practices should be adopted:

* **Tune the Tools:** Acknowledge the potential for false positives and actively tune the SAST tool's rules and settings to align with the codebase, which helps to reduce irrelevant findings and build developer trust.16  
* **Foster Collaboration:** The high false positive rate of SAST can cause friction between security and development teams.20 Bridging this gap by fostering a collaborative culture where security is a shared responsibility is crucial to ensuring that security findings are addressed and not ignored.20  
* **Layer Security:** Recognize that neither SAST nor SCA is a silver bullet. A comprehensive application security strategy requires a layered approach that also includes other forms of testing, such as Dynamic Application Security Testing (DAST) or Interactive Application Security Testing (IAST), to cover all bases.23  
* **Continuously Improve:** Measure the effectiveness of the security program over time by tracking key metrics, such as Mean Time to Remediate, to identify areas for improvement and demonstrate the program's value.2

---

### **Part V: Market and Tool Landscape**

#### **SAST Tool Analysis**

The SAST market presents a clear dichotomy between vendors whose core business is security and those with a broader focus on code quality. This distinction is paramount for organizations choosing a tool.

* **SonarQube** is primarily known for its focus on code quality and maintainability, with security analysis as a complementary feature.29 Its developer-friendly nature, easy integration into CI/CD pipelines, and free community edition make it an attractive starting point for organizations.29 However, its security depth is often considered limited, and some users report that it is not sufficient for a mature security program, as it may miss complex vulnerabilities.18  
* **Checkmarx** and **Veracode** are positioned as security-first, enterprise-class platforms.18  
  **Checkmarx SAST** is built by a company specializing in security, offering wide language support and detailed scan reports that not only identify risks but also explain attack vectors and trace vulnerabilities back to specific code snippets.18  
  **Veracode** provides a comprehensive suite of security scans, including SAST, DAST, and SCA, all under one platform.30 It is known for its strong emphasis on compliance and risk management, making it a popular choice for large organizations with strict regulatory requirements.30 While these security-first tools may be more complex and expensive, they offer a more robust analysis and are often essential for organizations with high-stakes security requirements.18

The following table provides a comparison of these prominent SAST solutions:

| Feature | SonarQube | Checkmarx SAST | Veracode |
| :---- | :---- | :---- | :---- |
| **Core Focus** | Code Quality & Maintainability | Security | Security & Compliance |
| **Key Features** | Code quality metrics, bugs, code smells, basic security checks | Deep security analysis, taint analysis, detailed reports with attack vectors | Comprehensive platform (SAST, DAST, SCA), strong compliance features, IDE and CI/CD integration |
| **Scan Accuracy** | Can have a high false positive rate, especially for security findings 18 | False positive rates of around 5% reported by users 18 | Known to flag many issues, some of which are false positives 30 |
| **Language Support** | Broad, but advanced languages may require paid editions 18 | Wide range of languages and frameworks 18 | Supports most mainstream languages 30 |
| **Deployment** | On-premises or SaaS (SonarCloud) 30 | On-premises or SaaS 18 | SaaS-only 30 |
| **Pricing** | Free Community Edition available 29 | Paid enterprise solution 31 | Enterprise-focused, paid platform 30 |

#### **SCA Tool Analysis**

The SCA market is evolving beyond simple component identification. Top-tier vendors are now differentiating themselves on advanced capabilities that directly address the core challenges of SCA: data accuracy, automation, and intelligence.

* **Sonatype** is a leader in the SCA space, with a focus on delivering precise and actionable results.28 The analysis suggests that Sonatype differentiates itself with its claims of "near-zero false positive and false negative rates" and its ability to perform "deep binary fingerprinting," which allows it to identify dependencies regardless of how they are referenced.28 Sonatype also focuses on automating remediation to avoid manual work and has expanded its capabilities to include AI model analysis, addressing a new and emerging area of risk in the software supply chain.28  
* **Snyk** is a major player known for its developer-first approach. It offers a platform that integrates SCA with other security tools to help developers find and fix vulnerabilities in their code.28 However, based on some comparisons, it is noted for having data quality issues and offering only partial support for features like automated remediation and SBOM management.28  
* **Mend.io** (formerly WhiteSource) provides an application security platform that focuses on mitigating risks and managing open-source licenses.33

The following table compares key features of leading SCA vendors, highlighting the new battlegrounds of accuracy and automation:

| Feature | Sonatype | Snyk | JFrog |
| :---- | :---- | :---- | :---- |
| **Data Accuracy** | Described as "most accurate and curated data," with near-zero false positive/negative rates 28 | Data quality issues reported, potentially impacting remediation efforts 28 | Reported to have a large false positive and negative rate 28 |
| **SBOM Management** | End-to-end solution including generation, monitoring, and VEX 28 | Partial support; lacks data quality, auditing, and standardization 28 | Partial support; lacks standardization, VEX, and reactive monitoring 28 |
| **Automated Remediation** | Fully automated remediation that addresses direct and transitive risks 28 | Partial automation due to poor data quality and lack of build stability 28 | Partial automation due to lack of native developer-centric remediation 28 |
| **AI Model Management** | Provides full visibility and control over AI/ML usage 28 | Does not offer AI model management 28 | Partial support for AI/ML risks; lacks governance and specific policies 28 |

---

### **Conclusion and Recommendations**

SAST and SCA are essential and complementary components of a modern, proactive application security strategy. SAST secures the code an organization builds, while SCA governs the components it uses. A combined "shift left" strategy, integrating both tools into the SDLC, provides the most effective defense against the full spectrum of modern security threats.

Based on this analysis, the following recommendations are provided for organizations seeking to establish or mature their application security program:

1. **Establish a Security Culture:** Security is not just a technology problem; it is a cultural and operational one. The journey should begin by fostering a culture of security awareness where both development and security teams view security as a shared responsibility.  
2. **Implement SAST for Custom Code:** Integrate a SAST tool into the CI/CD pipeline to analyze proprietary code continuously. Implement a tiered scanning approach, using lightweight scans for real-time feedback on every commit and deeper, more comprehensive scans on a less frequent schedule to avoid disrupting the developer workflow. Actively tune the tool's rules to manage false positives, thereby building trust and preventing "alert fatigue."  
3. **Implement SCA for Supply Chain Governance:** Integrate a fast and accurate SCA tool to continuously monitor all open-source dependencies. This process should include generating and maintaining a complete Software Bill of Materials (SBOM) and enforcing license compliance to mitigate both security and legal risks.  
4. **Adopt a Layered Approach:** Acknowledge that neither SAST nor SCA is a silver bullet. A comprehensive security strategy must be layered, also incorporating other forms of testing such as DAST to cover runtime vulnerabilities and business logic flaws.23  
5. **Measure and Iterate:** Continuously measure the program's effectiveness by tracking key metrics, such as Mean Time to Remediate and the volume of vulnerabilities, to demonstrate value and guide continuous improvement.

#### **Works cited**

1. What Is SAST? How It Works and the Best Tools \- Legit Security, accessed September 25, 2025, [https://www.legitsecurity.com/aspm-knowledge-base/what-is-sast-and-how-it-works](https://www.legitsecurity.com/aspm-knowledge-base/what-is-sast-and-how-it-works)  
2. SAST vs. SCA testing: Strengths, Limitations, Implementation Best ..., accessed September 25, 2025, [https://snyk.io/articles/application-security/sast-vs-sca-testing/](https://snyk.io/articles/application-security/sast-vs-sca-testing/)  
3. Shift-Left Security: Integrate SAST Into DevSecOps Pipeline \- Checkmarx, accessed September 25, 2025, [https://checkmarx.com/learn/sast/shift-left-security-integrate-sast-into-devsecops-pipeline/](https://checkmarx.com/learn/sast/shift-left-security-integrate-sast-into-devsecops-pipeline/)  
4. SAST: A guide to static application security testing | CircleCI, accessed September 25, 2025, [https://circleci.com/blog/static-application-security-testing-sast/](https://circleci.com/blog/static-application-security-testing-sast/)  
5. Static Application Security Testing (SAST) \- GitLab Docs, accessed September 25, 2025, [https://docs.gitlab.com/user/application\_security/sast/](https://docs.gitlab.com/user/application_security/sast/)  
6. The Difference Between Source Code Analysis and SAST \- Aptori, accessed September 25, 2025, [https://www.aptori.com/blog/the-difference-between-source-code-analysis-sca-and-sast](https://www.aptori.com/blog/the-difference-between-source-code-analysis-sca-and-sast)  
7. What Is SAST and How Does Static Code Analysis Work? \- Black Duck, accessed September 25, 2025, [https://www.blackduck.com/glossary/what-is-sast.html](https://www.blackduck.com/glossary/what-is-sast.html)  
8. en.wikipedia.org, accessed September 25, 2025, [https://en.wikipedia.org/wiki/Static\_application\_security\_testing](https://en.wikipedia.org/wiki/Static_application_security_testing)  
9. SAST vs SCA Tools in Cybersecurity: What is the Difference? \- Contrast Security, accessed September 25, 2025, [https://www.contrastsecurity.com/glossary/sast-vs-sca](https://www.contrastsecurity.com/glossary/sast-vs-sca)  
10. SAST vs. SCA: What They Are & Why You Need Them \- Kiuwan, accessed September 25, 2025, [https://www.kiuwan.com/blog/sast-vs-sca/](https://www.kiuwan.com/blog/sast-vs-sca/)  
11. SCA vs SAST: what are they and which one is right for you? \- The GitHub Blog, accessed September 25, 2025, [https://github.blog/security/supply-chain-security/sca-vs-sast-what-are-they-and-which-one-is-right-for-you/](https://github.blog/security/supply-chain-security/sca-vs-sast-what-are-they-and-which-one-is-right-for-you/)  
12. en.wikipedia.org, accessed September 25, 2025, [https://en.wikipedia.org/wiki/Software\_composition\_analysis](https://en.wikipedia.org/wiki/Software_composition_analysis)  
13. What is Software Composition Analysis (SCA)? \- CrowdStrike, accessed September 25, 2025, [https://www.crowdstrike.com/en-us/cybersecurity-101/cloud-security/software-composition-analysis/](https://www.crowdstrike.com/en-us/cybersecurity-101/cloud-security/software-composition-analysis/)  
14. Software Composition Analysis: Challenges and Best Practices, accessed September 25, 2025, [https://www.oligo.security/academy/software-composition-analysis-challenges-and-best-practices](https://www.oligo.security/academy/software-composition-analysis-challenges-and-best-practices)  
15. Inside SAST Tools: How They Work and Why You Need Them | by ..., accessed September 25, 2025, [https://medium.com/@ajay.monga73/inside-sast-tools-how-they-work-and-why-you-need-them-6c0e9ec02b8e](https://medium.com/@ajay.monga73/inside-sast-tools-how-they-work-and-why-you-need-them-6c0e9ec02b8e)  
16. Integrating SAST Into Your CI/CD Pipeline: A Step-by-Step Guide \- Jit.io, accessed September 25, 2025, [https://www.jit.io/resources/app-security/integrating-sast-into-your-cicd-pipeline-a-step-by-step-guide](https://www.jit.io/resources/app-security/integrating-sast-into-your-cicd-pipeline-a-step-by-step-guide)  
17. Your Guide to AppSec Tools: SAST or SCA? \- Black Hat, accessed September 25, 2025, [https://www.blackhat.com/sponsor-posts/08062020-sonatype.html](https://www.blackhat.com/sponsor-posts/08062020-sonatype.html)  
18. Checkmarx vs SonarQube: SAST Alternatives, accessed September 25, 2025, [https://checkmarx.com/checkmarx-sonarqube/](https://checkmarx.com/checkmarx-sonarqube/)  
19. How To Set A Benchmark Of False Positives With SAST Tools \- Mend.io, accessed September 25, 2025, [https://www.mend.io/blog/benchmark-of-false-positives/](https://www.mend.io/blog/benchmark-of-false-positives/)  
20. Why False Positives Are the Bane of Application Security Testing, accessed September 25, 2025, [https://www.ox.security/blog/why-false-positives-are-the-bane-of-application-security-testing/](https://www.ox.security/blog/why-false-positives-are-the-bane-of-application-security-testing/)  
21. How to reduce False Positives in SAST? \- Corgea \- Home, accessed September 25, 2025, [https://corgea.com/Learn/how-to-reduce-false-positives-in-sast](https://corgea.com/Learn/how-to-reduce-false-positives-in-sast)  
22. What's a False Positive & How to Triage It in SAST+DAST? \- Astra Security, accessed September 25, 2025, [https://www.getastra.com/blog/dast/false-positive-triage/](https://www.getastra.com/blog/dast/false-positive-triage/)  
23. How To Incorporate SAST, DAST, And SCA Into The SDLC \- Checkmarx, accessed September 25, 2025, [https://checkmarx.com/learn/appsec/incorporate-sast-sca-dast-in-sdlc/](https://checkmarx.com/learn/appsec/incorporate-sast-sca-dast-in-sdlc/)  
24. Why Software Composition Analysis (SCA) Tools Fail | by Dana Crane | Medium, accessed September 25, 2025, [https://danacrane.medium.com/why-software-composition-analysis-sca-tools-fail-320c1deee20e](https://danacrane.medium.com/why-software-composition-analysis-sca-tools-fail-320c1deee20e)  
25. OSV \- Open Source Vulnerabilities, accessed September 25, 2025, [https://osv.dev/](https://osv.dev/)  
26. OWASP Dependency-Check, accessed September 25, 2025, [https://owasp.org/www-project-dependency-check/](https://owasp.org/www-project-dependency-check/)  
27. What is software composition analysis (SCA)? And how it works \- Dynatrace, accessed September 25, 2025, [https://www.dynatrace.com/news/blog/what-is-software-composition-analysis/](https://www.dynatrace.com/news/blog/what-is-software-composition-analysis/)  
28. Compare Leading SCA Tools \- Sonatype, accessed September 25, 2025, [https://www.sonatype.com/compare/best-sca-tools](https://www.sonatype.com/compare/best-sca-tools)  
29. Sonarqube Vs Checkmarx Comparison | Aikido Security, accessed September 25, 2025, [https://www.aikido.dev/blog/sonarqube-vs-checkmarx](https://www.aikido.dev/blog/sonarqube-vs-checkmarx)  
30. Sonarqube Vs Veracode Comparison | Aikido Security, accessed September 25, 2025, [https://www.aikido.dev/blog/sonarqube-vs-veracode](https://www.aikido.dev/blog/sonarqube-vs-veracode)  
31. Checkmarx Alternatives: Exploring the Best Tools for Secure Code Analysis, accessed September 25, 2025, [https://www.ox.security/blog/checkmarx-alternatives/](https://www.ox.security/blog/checkmarx-alternatives/)  
32. What is Veracode and use cases of Veracode? \- DevOpsSchool.com, accessed September 25, 2025, [https://www.devopsschool.com/blog/what-is-veracode-and-use-cases-of-veracode/](https://www.devopsschool.com/blog/what-is-veracode-and-use-cases-of-veracode/)  
33. Best Software Composition Analysis Reviews 2025 | Gartner Peer Insights, accessed September 25, 2025, [https://www.gartner.com/reviews/market/software-composition-analysis-sca](https://www.gartner.com/reviews/market/software-composition-analysis-sca)