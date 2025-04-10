export interface Testimonial {
  id: number;
  name: string;
  role: string;
  organization: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Gray",
    role: "Community Rehab, Team Manager",
    organization: "South West London and St George's Mental Health NHS Trust",
    content: "I worked with Martin between October 2024 and January 2025. He joined the team on a temporary basis and was the first psychologist in the team for some time. He immediately established good working relationships with his colleagues and got stuck into the challenging work of community rehab, building rapport with service users and assessing their psychological needs. He set up a referrals process for the team and provided lots of resources for the team. Martin is laid back and easily integrates into a new team. His knowledge of community mental health is extensive, and he has worked across many settings. I would not hesitate to recommend him to another service and we would gladly welcome him back!",
  },
  {
    id: 2,
    name: "Dr. Emma Harding",
    role: "Consultant Clinical Psychologist and Psychology Lead",
    organization: "Sutton and Cheam IRH SWLSTG NHS Trust",
    content: "Martin is a relaxed and approachable therapist who is focused on achieving positive outcomes for people experiencing a range of difficulties. He uses creativity and individuality to support people. Martin has encouraged many individuals to develop skills in understanding and overcoming their setbacks for themselves that has led to a significant degree of empowerment and the learning of new life skills",
  },
  {
    id: 3,
    name: "Harry Kapetanakis",
    role: "Adult Psychotherapist",
    organization: "Merton IRH, SWLSTG NHS Trust",
    content: "Martin is a caring and competent therapist. We worked together in an NHS service where he proved to be able to support clients who struggled with anxiety, low mood and had a history or trauma. He is a culturally competent clinician as he has varied experience from across the world",
  },
  {
    id: 4,
    name: "Dr Ferose Rahman MD, MRCPsych",
    role: "ST6 in General Adult Psychiatry",
    organization: "SWLSTG NHS Trust",
    content: "I had the pleasure of working alongside Martin for a year within a busy community mental health team, and I was consistently impressed by his skill, professionalism, and genuine care for the people he works with. He brings a rare combination of expertise, efficiency, and compassion to his practice, which makes him incredibly effective in supporting clients through complex and challenging situations. He has a real gift for understanding and making sense of people's experiences, and I've seen first-hand how his thoughtful, person-centred approach can help people feel heard, understood, and empowered. He's also highly skilled in working with risk and complex mental health difficulties, always bringing a calm, steady presence even in situations of high distress. As a colleague, he's approachable, collaborative, and generous with his knowledge — always willing to think things through with others and offer guidance in a way that feels supportive and respectful. I've also learned a lot from him — not just about psychological approaches, but about how to really hold space for people in a way that feels respectful and empowering. Anyone working with Martin — whether as a client or a professional — will be in very safe and skilled hands.",
  },
]; 