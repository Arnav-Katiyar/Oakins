export type MoodCategory = "tired" | "focused" | "chaotic" | "chill" | "stuck" | "creative" | "unknown";

interface Suggestion {
  coding: string;
  motivation: string;
}

const suggestions: Record<MoodCategory, Suggestion[]> = {
  tired: [
    { coding: "Refactor that one messy component.", motivation: "Take a break or build something simple 💤" },
    { coding: "Write some missing documentation.", motivation: "Resting is part of the process. Slow down." },
    { coding: "Just fix one tiny bug and call it a night.", motivation: "Small progress is still progress 🌙" }
  ],
  focused: [
    { coding: "Implement the core feature you've been putting off.", motivation: "Perfect time to build your dream project 🚀" },
    { coding: "Optimize the database queries.", motivation: "You're in the zone. Keep pushing boundaries." },
    { coding: "Set up the authentication flow.", motivation: "Laser focus. Unstoppable momentum ⚡" }
  ],
  chaotic: [
    { coding: "Try out that new bleeding-edge framework.", motivation: "Experiment. Break things. Learn fast ⚡" },
    { coding: "Rewrite a module from scratch just to see what happens.", motivation: "Chaos is the ladder to innovation." },
    { coding: "Add an overly complex animation just for fun.", motivation: "Rules are meant to be broken tonight 🌪️" }
  ],
  chill: [
    { coding: "Polish the UI and add some micro-interactions.", motivation: "Smooth vibes. Clean code 🌊" },
    { coding: "Set up your continuous integration pipeline.", motivation: "Take your time. Let the code flow naturally." },
    { coding: "Review some PRs or read some open-source code.", motivation: "No rush, just enjoying the craft 🍵" }
  ],
  stuck: [
    { coding: "Step away from the screen for 5 minutes.", motivation: "The answer is often found when you stop looking for it 🔍" },
    { coding: "Write down the problem in plain English.", motivation: "Rubber duck debugging is your best friend right now 🦆" },
    { coding: "Look at the problem from a completely different angle.", motivation: "Every wall is a door if you push hard enough 🚪" }
  ],
  creative: [
    { coding: "Design a completely new feature.", motivation: "Let your imagination run wild 🎨" },
    { coding: "Experiment with some crazy CSS animations.", motivation: "You're an artist and code is your canvas 🖌️" },
    { coding: "Brainstorm ideas for your next big project.", motivation: "The next big thing starts with a single idea 💡" }
  ],
  unknown: [
    { coding: "Write a console.log('hello world').", motivation: "Wherever you're at, just keep swimming 🐟" },
    { coding: "Clean up your desktop and close some tabs.", motivation: "A clear workspace is a clear mind 🧹" },
    { coding: "Just start typing and see what happens.", motivation: "Action precedes motivation. Just start 🎬" }
  ]
};

const musicGenres = ["Lofi Hip Hop", "Synthwave", "Phonk", "Ambient", "Dark Techno", "Jazz Chill", "Cyberpunk", "Vaporwave"];

export function analyzeMood(input: string): MoodCategory {
  const normalized = input.toLowerCase();
  
  if (normalized.match(/tired|sleepy|exhausted|dead|done|bed/)) return "tired";
  if (normalized.match(/focus|zone|grind|ready|pumped|locked/)) return "focused";
  if (normalized.match(/chaos|crazy|wild|mad|insane|break/)) return "chaotic";
  if (normalized.match(/chill|relax|calm|smooth|easy/)) return "chill";
  if (normalized.match(/stuck|block|confused|lost|bug/)) return "stuck";
  if (normalized.match(/create|art|design|inspire|idea/)) return "creative";
  
  return "unknown";
}

export function getSuggestion(mood: MoodCategory): Suggestion {
  const options = suggestions[mood];
  return options[Math.floor(Math.random() * options.length)];
}

export function getRandomMusic(): string {
  return musicGenres[Math.floor(Math.random() * musicGenres.length)];
}
