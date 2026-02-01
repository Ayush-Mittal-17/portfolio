import { personalInfo } from '../../data/projects';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--border-subtle)] py-8">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-[var(--text-muted)]">
                        © {currentYear} <span className="text-[var(--text-secondary)]">{personalInfo.name}</span>. Crafted with 💜
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
