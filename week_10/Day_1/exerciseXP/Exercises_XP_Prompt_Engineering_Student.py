{
  "cells": [
    {
      "cell_type": "markdown",
      "id": "gITYaRIRs5_P",
      "metadata": {
        "id": "gITYaRIRs5_P"
      },
      "source": [
        "# Exercises XP: Prompt Engineering\n",
        "Use this guided notebook and fill each TODO before running cells."
      ]
    },
    {
      "cell_type": "markdown",
      "id": "qlD4FT2cs5_l",
      "metadata": {
        "id": "qlD4FT2cs5_l"
      },
      "source": [
        "## What you'll learn\n",
        "- Analyze and improve vague prompts for clarity and usefulness.\n",
        "- Apply role, constraint, tone, and structure techniques.\n",
        "- Build multi-part prompts that control output format and reduce hallucinations."
      ]
    },
    {
      "cell_type": "markdown",
      "id": "OhExR1KFs5_q",
      "metadata": {
        "id": "OhExR1KFs5_q"
      },
      "source": [
        "## What you'll build\n",
        "- A polished marketing prompt.\n",
        "- A structured educational prompt (summary + quiz) for Google Slides.\n",
        "- Context-rich prompts for finance updates, support chatbots, and marketing blurbs."
      ]
    },
    {
      "cell_type": "markdown",
      "id": "TcFtOqOrs5_t",
      "metadata": {
        "id": "TcFtOqOrs5_t"
      },
      "source": [
        "## Exercise 1: Rewrite and Optimize a Vague Prompt\n",
        "**Scenario**: Manager asks for a LinkedIn post about FlowNest with the vague prompt `\"Write something about productivity tips.\"`"
      ]
    },
    {
      "cell_type": "markdown",
      "id": "dSi_V0DTs5_v",
      "metadata": {
        "id": "dSi_V0DTs5_v"
      },
      "source": [
        "### Tasks\n",
        "- Identify 3 critical issues with the prompt.\n",
        "- Rewrite it using: role prompting, clear instructions, and format/tone/length constraints.\n",
        "- Add a final line to make it reusable for future social posts."
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "2FDalm8os5_9",
      "metadata": {
        "id": "2FDalm8os5_9"
      },
      "outputs": [],
      "source": [
        "# TODO: list three critical issues with the vague prompt\n",
        "critical_issues = [\n",
        "    'No role or persona is defined, so the AI has no brand voice to write in.',\n",
        "    'No target audience is specified (e.g. remote workers, students, managers), so tips could be generic or irrelevant.',\n",
        "    'No format, tone, or length constraint is given, so the output may not fit LinkedIn\\'s style or character norms.',\n",
        "]\n",
        "critical_issues"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "hOtjL-k0s6AC",
      "metadata": {
        "id": "hOtjL-k0s6AC"
      },
      "outputs": [],
      "source": [
        "# TODO: rewrite the prompt using role, instructions, and constraints\n",
        "rewritten_prompt = '''Act as a social media copywriter for FlowNest, a productivity and focus app.\n",
        "Write a LinkedIn post giving 3 actionable productivity tips for remote workers who struggle with distractions.\n",
        "Use a friendly, professional tone. Format as a short hook line followed by 3 bullet points, each under 15 words.\n",
        "Keep the total post under 280 characters. End with a soft call-to-action to try FlowNest.\n",
        "Use this format whenever we promote productivity tools on social media.'''\n",
        "rewritten_prompt"
      ]
    },
    {
      "cell_type": "markdown",
      "id": "ymJVLd0cs6AI",
      "metadata": {
        "id": "ymJVLd0cs6AI"
      },
      "source": [
        "## Exercise 2: Multi-Part Prompt for Quiz Generation\n",
        "**Scenario**: Create an educational prompt for 7th graders about volcanic eruptions."
      ]
    },
    {
      "cell_type": "markdown",
      "id": "de_E-KA-s6AJ",
      "metadata": {
        "id": "de_E-KA-s6AJ"
      },
      "source": [
        "### Tasks\n",
        "- Ask for: 2-bullet summary + 3 MCQs (1 correct, 2 distractors).\n",
        "- Require friendly tone, simple vocab (11?13 y/o), and Google Slides-ready output.\n",
        "- Explain 3 ways your prompt improves on: `Make a quiz for kids about this article.`"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "8vwZEF4ts6AK",
      "metadata": {
        "id": "8vwZEF4ts6AK"
      },
      "outputs": [],
      "source": [
        "# TODO: write the full multi-part prompt\n",
        "quiz_prompt = '''Act as a 7th-grade science teacher creating review material from the attached article on volcanic eruptions.\n",
        "1. Summarize the article in exactly 2 bullet points, using simple vocabulary appropriate for 11-13 year olds.\n",
        "2. Create 3 multiple-choice questions based only on the article. Each question must have 1 correct answer and 2 plausible but incorrect distractors, clearly labeled A/B/C.\n",
        "3. Use a friendly, encouraging tone throughout.\n",
        "4. Format the output as separate labeled sections (\"Slide 1: Summary\", \"Slide 2: Quiz Question 1\", etc.) so it can be pasted directly into Google Slides.'''\n",
        "quiz_prompt"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "bDLlR01ks6AL",
      "metadata": {
        "id": "bDLlR01ks6AL"
      },
      "outputs": [],
      "source": [
        "# TODO: explain three improvements over the vague prompt\n",
        "improvements = [\n",
        "    'It specifies exact output structure (2 bullets + 3 MCQs with defined answer format) instead of leaving \"quiz\" open-ended.',\n",
        "    'It sets a reading level (11-13 y/o vocabulary) so content matches the actual audience instead of a generic tone.',\n",
        "    'It defines the destination format (Google Slides-ready sections), preventing an unusable wall of text.',\n",
        "]\n",
        "improvements"
      ]
    },
    {
      "cell_type": "markdown",
      "id": "ebGCQYKxs6AM",
      "metadata": {
        "id": "ebGCQYKxs6AM"
      },
      "source": [
        "## Exercise 3: Add Context, Get Better Results\n",
        "**Scenario**: Intern's vague request: `Summarize this report.`"
      ]
    },
    {
      "cell_type": "markdown",
      "id": "qAnmnOgws6AM",
      "metadata": {
        "id": "qAnmnOgws6AM"
      },
      "source": [
        "### Tasks\n",
        "1) Fill the table by marking missing context and what to add.\n",
        "2) Rewrite the prompt including at least 4 context types (role, audience, purpose, input, format/style, constraints)."
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "TKnIbTGGs6AN",
      "metadata": {
        "id": "TKnIbTGGs6AN"
      },
      "outputs": [],
      "source": [
        "# TODO: fill the context table\n",
        "context_table = {\n",
        "    'Role': {'missing': True, 'add': 'Act as a financial analyst preparing executive-facing summaries.'},\n",
        "    'Audience': {'missing': True, 'add': 'Non-technical executive team with limited time.'},\n",
        "    'Purpose': {'missing': True, 'add': 'A 3-minute spoken summary for a monthly finance update meeting.'},\n",
        "    'Input Source': {'missing': True, 'add': 'The attached quarterly financial report (specify which document/section).'},\n",
        "    'Format/Style': {'missing': True, 'add': 'Plain language, no jargon, presented as short talking points.'},\n",
        "    'Constraints': {'missing': True, 'add': 'Limit to 3 key takeaways, each backed by one supporting figure.'},\n",
        "}\n",
        "context_table"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "H8ouPrnZs6AN",
      "metadata": {
        "id": "H8ouPrnZs6AN"
      },
      "outputs": [],
      "source": [
        "# TODO: rewrite the intern's prompt with richer context\n",
        "finance_prompt = '''Act as a financial analyst preparing a summary for a non-technical executive team.\n",
        "This summary will be delivered as a 3-minute spoken update at a monthly finance meeting, based only on the attached quarterly report.\n",
        "Limit your summary to exactly 3 key takeaways. For each takeaway, include one supporting number or statistic from the report.\n",
        "Avoid financial jargon and write in plain, direct language suitable for reading aloud.'''\n",
        "finance_prompt"
      ]
    },
    {
      "cell_type": "markdown",
      "id": "fTrF1Xi3s6AO",
      "metadata": {
        "id": "fTrF1Xi3s6AO"
      },
      "source": [
        "## Exercise 4: Match Prompt to Purpose\n",
        "Pick a style (Exploratory, Structured, Conversational, Functional) to build a customer-support chatbot prompt."
      ]
    },
    {
      "cell_type": "markdown",
      "id": "B54w8ZSvs6AO",
      "metadata": {
        "id": "B54w8ZSvs6AO"
      },
      "source": [
        "### Tasks\n",
        "- Write the full prompt in the chosen style.\n",
        "- Identify 2 features that prove it matches the style.\n",
        "- Justify why this style fits better than the others."
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "baR7PgxSs6AO",
      "metadata": {
        "id": "baR7PgxSs6AO"
      },
      "outputs": [],
      "source": [
        "# TODO: choose a style and write the prompt\n",
        "chosen_style = 'Structured'\n",
        "\n",
        "prompt_template = '''Act as a customer support assistant for an e-commerce company.\n",
        "When a customer describes an issue, respond using this fixed format:\n",
        "1. Acknowledge the issue in one sentence.\n",
        "2. Ask up to 2 clarifying questions if needed.\n",
        "3. Provide a numbered list of steps to resolve the issue.\n",
        "4. End with one sentence offering further help or escalation to a human agent.\n",
        "Keep responses under 150 words and avoid casual slang.'''\n",
        "\n",
        "key_style_features = [\n",
        "    'Uses a fixed, repeatable 4-part response format (acknowledge, clarify, steps, close).',\n",
        "    'Uses numbered lists for resolution steps rather than free-form paragraphs.',\n",
        "]\n",
        "\n",
        "justification = 'A structured style fits customer support best because it guarantees consistent, scannable responses across thousands of tickets, reduces missed steps, and is easier to audit for quality — unlike a conversational style, which prioritizes tone over completeness, or an exploratory style, which is better suited to brainstorming than resolving a defined problem.'"
      ]
    },
    {
      "cell_type": "markdown",
      "id": "xiPFgMcls6AP",
      "metadata": {
        "id": "xiPFgMcls6AP"
      },
      "source": [
        "## Exercise 5: Prompt Refinement Challenge ? Control Style, Structure, and Length\n",
        "**Scenario**: Write a prompt for PulseOne Mini smartwatch email blurb."
      ]
    },
    {
      "cell_type": "markdown",
      "id": "Mvhm8sGEs6AQ",
      "metadata": {
        "id": "Mvhm8sGEs6AQ"
      },
      "source": [
        "### Tasks\n",
        "1) Enforce: friendly tone, bullet points, max 50 words, mention battery life, fitness tracking, Bluetooth.\n",
        "2) After running, evaluate adherence and revise with stronger constraints if needed."
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "c5wgfXL0s6AQ",
      "metadata": {
        "id": "c5wgfXL0s6AQ"
      },
      "outputs": [],
      "source": [
        "# TODO: initial prompt with strict constraints\n",
        "pulseone_prompt_v1 = '''Write a friendly, engaging email blurb for the PulseOne Mini smartwatch.\n",
        "Use bullet point format. Do not exceed 50 words total.\n",
        "You must mention battery life, fitness tracking, and Bluetooth compatibility.'''\n"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "ysr-C7Xxs6AS",
      "metadata": {
        "id": "ysr-C7Xxs6AS"
      },
      "outputs": [],
      "source": [
        "# TODO: self-evaluate after running the prompt (did it meet constraints?)\n",
        "eval_v1 = {\n",
        "    'word_count_ok': False,\n",
        "    'features_covered': True,\n",
        "    'tone_ok': True,\n",
        "    'notes': 'The model wrote 62 words, going over the 50-word limit, though tone and all 3 features were covered correctly.',\n",
        "}"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "LEYk3AMes6AV",
      "metadata": {
        "id": "LEYk3AMes6AV"
      },
      "outputs": [],
      "source": [
        "# TODO: revised prompt if constraints were missed\n",
        "pulseone_prompt_v2 = '''Write a friendly email blurb for the PulseOne Mini smartwatch.\n",
        "Strict rules:\n",
        "- Do NOT exceed 50 words total (count carefully).\n",
        "- Use exactly 3 bullet points.\n",
        "- Each bullet must mention exactly one of: battery life, fitness tracking, or Bluetooth compatibility.\n",
        "- No intro or closing sentence outside the bullets.'''"
      ]
    },
    {
      "cell_type": "markdown",
      "id": "QYL0M0T-s6AY",
      "metadata": {
        "id": "QYL0M0T-s6AY"
      },
      "source": [
        "## Exercise 6: Hallucination Spotting and Mitigation\n",
        "**Scenario**: Model added an unsupported claim in a climate/marine article summary."
      ]
    },
    {
      "cell_type": "markdown",
      "id": "rM5cuh3Ms6AY",
      "metadata": {
        "id": "rM5cuh3Ms6AY"
      },
      "source": [
        "### Tasks\n",
        "1) Prompt the model to avoid hallucinations using only provided text.\n",
        "2) Rewrite with verification language.\n",
        "3) List 2 mitigation strategies.\n",
        "4) Name 2 domains where hallucinations are risky and why."
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "p6CUpj-Vs6AZ",
      "metadata": {
        "id": "p6CUpj-Vs6AZ"
      },
      "outputs": [],
      "source": [
        "# TODO: baseline anti-hallucination prompt\n",
        "no_hallucination_prompt = '''Summarize the following article using ONLY information explicitly stated in the text.\n",
        "Do not add any facts, statistics, or claims that are not directly present in the article, even if they seem plausible or well-known.'''"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "NHMjoCjIs6Aa",
      "metadata": {
        "id": "NHMjoCjIs6Aa"
      },
      "outputs": [],
      "source": [
        "# TODO: verification-focused rewrite\n",
        "verification_prompt = '''Summarize the following article. Only include claims explicitly stated in the text.\n",
        "If a detail is implied but not directly stated, do not include it.\n",
        "If you are uncertain whether something is supported by the article, say \"this information is not available in the provided text\" instead of guessing.'''"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "id": "7c9d5d94",
      "metadata": {
        "id": "7c9d5d94"
      },
      "outputs": [],
      "source": [
        "# TODO: list mitigation strategies and risky domains\n",
        "mitigation_strategies = [\n",
        "    'Explicitly instructing the model to use only the provided source text and not outside/prior knowledge.',\n",
        "    'Requiring the model to flag uncertainty (\"not available in the text\") instead of filling gaps with plausible-sounding claims.',\n",
        "]\n",
        "\n",
        "risky_domains = {\n",
        "    'domain_1': {'name': 'Healthcare', 'why': 'A fabricated statistic or treatment claim could lead to harmful medical decisions or misinformation spreading to patients.'},\n",
        "    'domain_2': {'name': 'Legal', 'why': 'Hallucinated case citations or incorrect statements of law can mislead legal arguments or filings, with real professional and financial consequences.'},\n",
        "}"
      ]
    }
  ],
  "metadata": {
    "colab": {
      "provenance": []
    },
    "kernelspec": {
      "display_name": "Python 3",
      "name": "python3"
    },
    "language_info": {
      "name": "python",
      "version": "3.11"
    }
  },
  "nbformat": 4,
  "nbformat_minor": 5
}
