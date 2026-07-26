import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { TableOfContents } from "../../components/TableOfContents";
import "../../styles/pages/posts/TowardsPerfectNoteTakingPage.css";

export function ObjPage() {
    return (
        <>
            <Helmet>
                <title>Towards Perfect Note Taking: Levi Kingma</title>
                <meta name="description" content="A comparison of five approaches to taking personal notes." />
            </Helmet>
            <nav className="top-nav">
                <Link to="/posts" className="nav-link">posts</Link>
            </nav>

            <main className="blog-container">
                <div className="post-layout">
                    <TableOfContents />
                    <article className="post-article">
                        <h1 className="blog-title">Towards Perfect Note Taking</h1>
                        <div className="post-body">
                            <p>You probably have a few abandoned attempts at taking notes or journaling behind you. At least, I certainly do.</p>
                            <p>Every new system starts with the same promise: this time I'll capture everything, make valuable connections, and finally build that elusive second brain. Then the system asks for too much upkeep, becomes a mess, or quietly gets put off until it disappears from my routine.</p>
                            <p>After trying several approaches, I decided to define what a perfect system for taking notes should encompass for me, examine why my previous systems fell short, and propose a system that might finally strike the right balance.</p>

                            <h2>My criteria</h2>
                            <p>In my opinion, a perfect system for taking notes should satisfy the following criteria:</p>
                            <ul>
                                <li><strong>Ease of Writing:</strong> adding new content should require as little mental overhead as possible. If I have to choose a subfolder, add five tags, and write out a file structure before writing, I'll eventually stop.</li>
                                <li><strong>Ease of Retrieval:</strong> finding a note should be quick, even when I only remember part of it. The system needs to work across my phone and computer, and it should help me follow connections between notes. A connection can be an explicit backlink in Obsidian, or something as simple as understanding what "that thing from last week" refers to in a journal.</li>
                                <li><strong>Full Comprehension:</strong> the system should contain the knowledge I care about, and I should know what it contains at some point. This includes my own writing as well as sources such as PDFs, papers, slides, and books. Storing a file isn't enough. I need enough context to understand why it's there and what I took from it.</li>
                            </ul>
                            <p>I have two practical requirements as well. The system should cost little to nothing to use, and it should handle my private thoughts securely. A perfect workflow isn't useful if it becomes expensive at scale or asks me to put sensitive notes in a service I don't trust.</p>
                            <p>These goals pull against each other. A completely unstructured inbox makes writing effortless but becomes harder to understand over time. A carefully organized knowledge base is easier to browse but asks you to make more decisions while writing. The goal isn't a system that fully satisfies every criterion, but one that balances them in a way I can keep using.</p>

                            <h2>Where my previous systems fell short</h2>
                            <p>Now that I know what I need from a system, I can evaluate my old systems against those criteria and see what went wrong.</p>

                            <h3>Signal Note to Self</h3>
                            <p>Signal has a Note to Self chat that works like an inbox. I used it as a universal dumping ground for thoughts, reminders, links, and anything else I wanted to save quickly.</p>
                            <div className="rating-matrix-wrapper">
                                <table className="rating-matrix">
                                    <thead><tr><th>Criterion</th><th>Score</th></tr></thead>
                                    <tbody>
                                        <tr><td>Ease of Writing</td><td><strong>5 / 5</strong></td></tr>
                                        <tr><td>Ease of Retrieval</td><td><strong>3 / 5</strong></td></tr>
                                        <tr><td>Full Comprehension</td><td><strong>2 / 5</strong></td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p><strong>Ease of Writing, 5 out of 5.</strong> I already use Signal for messaging, so opening the Note to Self chat and sending something takes almost no effort. Photos, files, links, and unfinished thoughts all fit into the same familiar workflow.</p>
                            <p><strong>Ease of Retrieval, 3 out of 5.</strong> Signal is available on my phone and computer, and search works well when I remember a distinctive word. It becomes weaker when I don't remember how I phrased something. Scrolling through unrelated messages doesn't reveal many useful connections either.</p>
                            <p><strong>Full Comprehension, 2 out of 5.</strong> The inbox can contain almost anything, but I never build a clear picture of what is inside it. A PDF can sit between a shopping reminder and an unfinished idea without any summary or connection to the project it belongs to. Signal is excellent for capture, but poor as a permanent home for knowledge.</p>
                            <p><strong>Cost and Privacy.</strong> Signal is free, and <a href="https://signal.org/legal/#privacy-policy" target="_blank" rel="noopener noreferrer">Note to Self messages are encrypted so only you can read them</a>, just like other Signal messages. That makes it a private and practical inbox, just not an entire system.</p>

                            <h3>Journaling</h3>
                            <p>Another approach is keeping a daily journal. Each day has one note containing the events, thoughts, meetings, and ideas from that day. I've tried both physical and digital versions of this.</p>
                            <div className="rating-matrix-wrapper">
                                <table className="rating-matrix">
                                    <thead><tr><th>Criterion</th><th>Score</th></tr></thead>
                                    <tbody>
                                        <tr><td>Ease of Writing</td><td><strong>4 / 5</strong></td></tr>
                                        <tr><td>Ease of Retrieval</td><td><strong>3 / 5*</strong></td></tr>
                                        <tr><td>Full Comprehension</td><td><strong>3 / 5</strong></td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p><strong>Ease of Writing, 4 out of 5.</strong> There's only one note, and writing in it becomes a daily habit. I don't have to decide whether a thought deserves its own note or whether one topic should be split into several notes. Everything from that day starts in the same place.</p>
                            <p><strong>Ease of Retrieval, 3 out of 5*.</strong> This score varies wildly by format. A digital journal can let you search all its text and access it across devices, while a physical journal asks me to remember a date and flip through pages. Both work well when I remember when something happened, but less well when details about one project are scattered across twenty different entries or locations.</p>
                            <p><strong>Full Comprehension, 3 out of 5.</strong> A journal records what mattered to me on a given day, so I understand each entry when I write it. It can also preserve natural connections through context by referring back to other points in time. Over time, however, the wider picture gets scattered across dates.</p>
                            <p><strong>Cost and Privacy.</strong> A paper notebook or a folder of local Markdown files costs little to nothing and can remain private. A digital journal hosted by someone else depends on that service's price and security.</p>

                            <h3>Knowledge Bases Managed by AI</h3>
                            <p>As an experiment, I built a knowledge base managed by AI inside Obsidian. You add messy notes, links, and files, then let a model organize and format them according to rules and a structure you define beforehand. The model summarizes content, adds metadata, creates connections, and answers questions about the result.</p>
                            <div className="rating-matrix-wrapper">
                                <table className="rating-matrix">
                                    <thead><tr><th>Criterion</th><th>Score</th></tr></thead>
                                    <tbody>
                                        <tr><td>Ease of Writing</td><td><strong>5 / 5*</strong></td></tr>
                                        <tr><td>Ease of Retrieval</td><td><strong>5 / 5</strong></td></tr>
                                        <tr><td>Full Comprehension</td><td><strong>2 / 5</strong></td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p><strong>Ease of Writing, 5 out of 5*.</strong> With great rules, or if you just don't care much about the exact output, this can be just as easy as the Signal inbox. But in my case, I was constantly proofreading the model's output and iterating on my rules to improve the next result. That defeated the purpose of asking the model to manage the knowledge base for me.</p>
                            <p><strong>Ease of Retrieval, 5 out of 5.</strong> The model can add tags, keywords, summaries, and links that make ordinary search much more effective. If that isn't enough, you can just ask the model itself where something is. It can also find connections between notes and documents that use different terms.</p>
                            <p><strong>Full Comprehension, 2 out of 5.</strong> This is where coverage and comprehension become different things. A model can ingest every note and PDF, but it interprets and structures that information from its own perspective. By letting it do the summarizing and connecting, I also skip the process of working through that knowledge myself. The result can cover everything while reflecting connections or conclusions I don't fully understand or agree with.</p>
                            <p><strong>Cost and Privacy.</strong> Obsidian keeps the resulting files local, but an external model provider still receives the content it processes. Model usage also costs money as the collection grows. A local model avoids sending notes elsewhere, but adds hardware and maintenance costs.</p>

                            <h2>Capacities</h2>
                            <p>While I was working out my criteria for this post, I stumbled upon <a href="https://capacities.io" target="_blank" rel="noopener noreferrer">Capacities</a>.</p>
                            <p>Capacities creates a daily note in which you can quickly write your thoughts and experiences. But it also lets you turn valuable pieces of those daily notes into reusable objects, such as people, projects, meetings, or books.</p>
                            <p>The daily note remains the place where I actually take notes. Objects are the durable pieces of information that deserve to exist beyond the day on which they appeared.</p>
                            <div className="rating-matrix-wrapper">
                                <table className="rating-matrix">
                                    <thead><tr><th>Criterion</th><th>Score</th></tr></thead>
                                    <tbody>
                                        <tr><td>Ease of Writing</td><td><strong>4 / 5</strong></td></tr>
                                        <tr><td>Ease of Retrieval</td><td><strong>5 / 5</strong></td></tr>
                                        <tr><td>Full Comprehension</td><td><strong>4 / 5</strong></td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p><strong>Ease of Writing, 4 out of 5.</strong> The daily note removes most decisions during capture. Turning something into an object still adds more work than dropping it into a plain inbox, even though Capacities makes that process easy.</p>
                            <p><strong>Ease of Retrieval, 5 out of 5.</strong> Search, object pages, and links provide several ways to find information and follow its connections. Everything is stored in the cloud by default, so the same information is available across devices without any extra setup.</p>
                            <p><strong>Full Comprehension, 4 out of 5.</strong> Objects encourage giving valuable information a stable place and revisiting it in context. The system still depends on the person using it to decide what deserves to become an object and to write enough about it to understand it later.</p>
                            <p><strong>Cost and Privacy.</strong> Capacities has a free option, but some features require a paid plan. <a href="https://capacities.io/privacy-policy" target="_blank" rel="noopener noreferrer">Its cloud storage is not encrypted so that only you can read it,</a> which doesn't fit my preferences for sensitive journal entries. I do urge you to check Capacities out and read <a href="https://docs.capacities.io/faq/general/capacities-at-work#security-concerns-and-data-privacy" target="_blank" rel="noopener noreferrer">the reasoning behind its choices and its privacy policy</a>, as it might still be the system for you.</p>
                            <p>Capacities gave me the central idea, but not the final tool. I want to combine its daily notes and objects with Obsidian's plain files, flexible links, automatic backlinks, stronger privacy, and the freedom to customize almost every part of the workflow. That leads to my own version of the system.</p>

                            <h2>My proposal: Object Linked Journaling</h2>
                            <p>The system starts with a new Obsidian vault and four main folders:</p>
                            <pre><code>{`Assets/
Daily/
Objects/
  Notes/
  Organizations/
  People/
  Projects/
  Sources/
System/
  Bases/
  Templates/`}</code></pre>
                            <p><strong>Assets/</strong> holds attachments such as images and PDFs.</p>
                            <p><strong>Daily/</strong> contains my daily entries. This is where I first capture thoughts and experiences before deciding whether anything deserves a durable place.</p>
                            <p><strong>Objects/</strong> contains the durable and reusable pieces of information that deserve their own place outside those entries. It separates them into notes, organizations, people, projects, and sources.</p>
                            <p><strong>System/</strong> contains the templates that define those object types and the Bases that list them as filterable tables.</p>
                            <p>For me, having only five core object types prevents too much thought about categorization while I'm writing. Someone trying this system can define completely different types, but the selection should stay as small as possible. More specific distinctions belong in properties instead. When they deserve durable objects, a lecture and a meeting can both be note objects, but one has <code>kind: lecture</code> and the other has <code>kind: meeting</code>.</p>
                            <p>Creating and filling in an object doesn't have to interrupt writing. You can link its name from a daily note, leave the file uncreated, then create or expand it during a weekly or monthly review when there is more time. After an initial burst, I expect relatively few new objects to appear anyway. Even an object with only a title and type has value: its existence records that the thing matters, it can be used in relationships, and its backlinks gather every mention at the bottom of the page.</p>

                            <h3>Plugins and setup</h3>
                            <p>The core <a href="https://help.obsidian.md/plugins/daily-notes" target="_blank" rel="noopener noreferrer"><strong>Daily Notes</strong></a> plugin creates each note inside <strong>Daily/</strong>. <a href="https://help.obsidian.md/plugins/templates" target="_blank" rel="noopener noreferrer"><strong>Templates</strong></a> provides the starting structure for each object, and <a href="https://help.obsidian.md/bases" target="_blank" rel="noopener noreferrer"><strong>Bases</strong></a> provides a filterable overview for every object type. I use <a href="https://obsidian.md/sync" target="_blank" rel="noopener noreferrer"><strong>Obsidian Sync</strong></a> across devices, but any service that securely synchronizes plain Markdown files can fill that role.</p>
                            <p><a href="https://obsidian.md/plugins?id=quickadd" target="_blank" rel="noopener noreferrer"><strong>QuickAdd</strong></a> provides a <strong>New Object</strong> command. After I choose an object type and enter its name, <strong>QuickAdd</strong> applies the matching template and places the file in the correct folder. Every template adds a <code>type</code> property, while properties such as <code>kind</code>, <code>relationship</code>, <code>status</code>, <code>author</code>, and <code>url</code> describe the object in more detail. Projects also have sections for their goal and current state, while sources have sections for their takeaway and notes.</p>
                            <p>The core <a href="https://help.obsidian.md/plugins/backlinks" target="_blank" rel="noopener noreferrer"><strong>Backlinks</strong></a> plugin keeps an automatically managed section at the bottom of every object. It lists every daily note and object that mentions it, so those connections appear without me maintaining a separate index.</p>
                            <p><a href="https://obsidian.md/plugins?id=iconic" target="_blank" rel="noopener noreferrer"><strong>Iconic</strong></a> and <a href="https://obsidian.md/plugins?id=supercharged-links-obsidian" target="_blank" rel="noopener noreferrer"><strong>Supercharged Links</strong></a> use the <code>type</code> property to make object types easier to distinguish visually. They're helpful, but they don't hold the system together. The Markdown files, links, templates, and backlinks do that.</p>

                            <h3>Writing the daily note</h3>
                            <p>The daily note is the inbox. I add a bullet whenever I want to capture a thought, experience, event, or loose piece of information. At this point, I don't have to decide where it belongs or how much detail it deserves.</p>
                            <figure className="post-example">
                                <img src="/assets/posts/object-oriented-daily-notes-example.png" alt="A daily entry with linked projects, organizations, sources, notes, and people" width={1206} height={350} />
                                <figcaption>Example of a daily note in the Object Linked Journaling system</figcaption>
                            </figure>
                            <p>The displayed name doesn't have to match the object file name. Obsidian aliases use <code>[[actual link|display name]]</code>, so I can write <code>[[Niels Jaspers|Niels]]</code> in one sentence and <code>[[Niels Jaspers|a friend]]</code> in another. Both references still point to the same object and appear in the same backlinks.</p>
                            <p>I don't have to create an object for everything that could become one. Before creating one, I ask myself: "Does this information need to have a place outside of the entries mentioning it?"</p>
                            <p>Take the lecture in the example above. If I learned only a little or maybe even nothing at all from it, I simply leave it as plain text. I could turn it into a note object, but the system doesn't force me to.</p>
                            <p>The same applies to everything else. A random person I spoke to in the elevator doesn't need to become a person object, unless they become important enough to remember independently of the entries mentioning them. When something passes that test, I create the corresponding object and link it.</p>

                            <h3>How it fares</h3>
                            <p>With this setup in place, the system balances quick daily writing with building up reliable knowledge over time.</p>
                            <div className="rating-matrix-wrapper">
                                <table className="rating-matrix">
                                    <thead><tr><th>Criterion</th><th>Score</th></tr></thead>
                                    <tbody>
                                        <tr><td>Ease of Writing</td><td><strong>4 / 5</strong></td></tr>
                                        <tr><td>Ease of Retrieval</td><td><strong>5 / 5</strong></td></tr>
                                        <tr><td>Full Comprehension</td><td><strong>4 / 5</strong></td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p><strong>Ease of Writing, 4 out of 5.</strong> Everything starts as a bullet in one daily note, so I don't need to navigate a folder tree before writing. When I create an object, <strong>QuickAdd</strong> manages its template and folder, while Obsidian manages its backlinks. Choosing an object type still adds friction, but I can defer that work instead of interrupting capture.</p>
                            <p><strong>Ease of Retrieval, 5 out of 5.</strong> I can search by text or date, browse each object type through Bases, or follow backlinks between objects. Even an otherwise empty project can connect its meetings, ideas, and sources across different days. Obsidian Sync makes the same plain files available across my devices without limiting retrieval to one platform.</p>
                            <p><strong>Full Comprehension, 4 out of 5.</strong> Returning to an object when I have time to develop it gives me a deliberate moment to understand and connect what I captured. A source object can contain the original PDF, my summary, why I saved it, and links to the projects or ideas it supports. That still depends on me writing enough context and keeping important objects up to date.</p>
                            <p><strong>Cost and Privacy.</strong> Obsidian is free for personal use and stores the vault as local files. Syncing across devices is optional, and <a href="https://obsidian.md/help/sync/security" target="_blank" rel="noopener noreferrer">Obsidian Sync encrypts synced data so only you can read it</a>. This keeps the system inexpensive without asking me to give up privacy.</p>

                            <h2>Conclusion</h2>
                            <p>Signal makes capture effortless, journaling turns writing into a habit, and AI makes large collections remarkably searchable. I think Object Linked Journaling strikes the best balance for me so far. But I could be wrong, I still have to use the system long enough to find out, and maybe I'll post an update when I do.</p>
                            <p>You may disagree with the final system I ended up with, or even with the criteria I used to find it. That's a good reason to define your own criteria, try a few approaches, and see what you can keep using. I think taking notes has value for everyone, even if the right system looks completely different for each person.</p>
                            <p>Until next time!</p>
                            <footer className="post-footer">
                                <p>
                                    Enjoyed this post? Give this repo a star <a href="https://github.com/levi-ivel/levikingma.com" target="_blank" rel="noopener noreferrer">here</a> 🌟
                                </p>
                                <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                    Back to Top
                                </button>
                            </footer>
                        </div>
                    </article>
                </div>
            </main>
        </>
    );
}
