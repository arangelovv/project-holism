import {
	BarChart2,
	Utensils,
	Dumbbell,
	Activity,
	Clock,
	CheckCircle2,
} from "lucide-angular";

export const landingPageData = {
	features: [
		{
			icon: BarChart2,
			title: "Progress Tracking",
			description:
				"Monitor your fitness journey with detailed analytics and visual progress tracking.",
		},
		{
			icon: Utensils,
			title: "Meal Planning",
			description:
				"Create and customize meal plans that align with your nutritional goals.",
		},
		{
			icon: Dumbbell,
			title: "Workout Library",
			description:
				"Access a vast library of exercises and workout routines for all fitness levels.",
		},
		{
			icon: Activity,
			title: "Health Metrics",
			description:
				"Track vital health metrics and receive personalized insights for improvement.",
		},
		{
			icon: Clock,
			title: "Time Management",
			description:
				"Efficiently schedule and manage your workouts and meal preparation.",
		},
		{
			icon: CheckCircle2,
			title: "Goal Setting",
			description:
				"Set and track personalized fitness goals with milestone achievements.",
		},
	],

	testimonials: [
		{
			name: "Sarah Johnson",
			role: "Fitness Coach",
			image: "saraha.jpeg",
			quote:
				"Project Holism has revolutionized how I track my clients' progress. The comprehensive features and intuitive interface make it a joy to use.",
		},
		{
			name: "Michael Chen",
			role: "Personal Trainer",
			image: "michael.jpg",
			quote:
				"The workout planning tools are exceptional. My clients love the seamless experience and detailed progress tracking.",
		},
		{
			name: "Emily Rodriguez",
			role: "Nutritionist",
			image: "emma.jpg",
			quote:
				"As a nutritionist, I appreciate the detailed meal planning features. It makes creating and sharing meal plans effortless.",
		},
	],

	pricingDetails: {
		title: "Premium Plan",
		price: "9.99",
		period: "/month",
		description: "Everything you need for your fitness journey",
		features: [
			"Comprehensive meal tracking",
			"Advanced analytics and insights",
			"Custom meal and workout plans",
			"Progress tracking and reports",
			"Priority customer support",
		],
		buttonText: "Get Started Now",
		buttonLink: "/auth",
		disclaimer: "No credit card required • 14-day free trial",
	},

	productLinks: [
		{ name: "Features", href: "#features" },
		{ name: "Pricing", href: "#pricing" },
		{ name: "Support", href: "#" },
	],

	companyLinks: [
		{ name: "About", href: "#" },
		{ name: "Blog", href: "#" },
		{ name: "Careers", href: "#" },
	],

	legalLinks: [
		{ name: "Privacy", href: "#" },
		{ name: "Terms", href: "#" },
		{ name: "Cookie Policy", href: "#" },
	],

	heroSection: {
		title: "Your All-in-One Fitness Journey Companion",
		subtitle:
			"Track, plan, and achieve your fitness goals with our comprehensive platform.",
		ctaButton: {
			text: "Start Your Journey",
			link: "/auth",
		},
		secondaryButton: {
			text: "Learn More",
			link: "#features",
		},
	},

	statsSection: {
		stats: [
			{ value: "10K+", label: "Active Users" },
			{ value: "500+", label: "Workout Plans" },
			{ value: "1M+", label: "Meals Tracked" },
			{ value: "95%", label: "Success Rate" },
		],
	},
};
