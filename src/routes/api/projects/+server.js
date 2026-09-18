import { json } from '@sveltejs/kit';

const projects = [
    { slug:'timetable', title:'Timetable Helper', summary:'Class/Schedule Organize Helper'},
    { slug:'gallery', title:'Image Gallery', summary:'Mini Image Gallery'},
    { slug:'memo', title:'Memo Pad', summary:'Saves Note Locally'}
];

export function GET() {
    return json(projects);
}