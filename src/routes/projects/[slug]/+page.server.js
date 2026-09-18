import { error } from '@sveltejs/kit';

const DB = {
    timetable: { title:'Timetable Helper', body:'This is a tool for organizing my own timetable.'},
    gallery: { title:'Image Gallery', body:'This is example of mini gallery.'},
    memo: { title:'Memo Pad', body:'Stores/restores memos locally in the browser.'}
};

export function load({ params }) {
    const key = params.slug;
    const item = DB[key];
    if (!item) throw error(404, 'Not Found');
    return { item, slug:key };
}