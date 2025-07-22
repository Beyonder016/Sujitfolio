import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
	{
		point: new THREE.Vector3(0, 0, 0),
		year: "2023",
		title: "Tata Motors",
		subtitle: "AWS DevOps Intern",
		position: "right",
	},
	{
		point: new THREE.Vector3(-4, -4, -3),
		year: "2025",
		title: "SunyMedicare LLP",
		subtitle: "Data Analyst Intern",
		position: "left",
	},
	{
		point: new THREE.Vector3(-3, -1, -6),
		year: "2025",
		title: "VIT Chennai",
		subtitle: "Computer Science with CPS",
		position: "left",
	},
	{
		point: new THREE.Vector3(0, -1, -10),
		year: "2025",
		title: "VE",
		subtitle: "Growth & Operations",
		position: "left",
	},
	{
		point: new THREE.Vector3(1, 1, -12),
		year: new Date().toLocaleDateString("default", { year: "numeric" }),
		title: "?",
		subtitle: "???",
		position: "right",
	},
];
