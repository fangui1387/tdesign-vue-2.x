export const docs: ({
    title: string;
    titleEn: string;
    type: string;
    children: ({
        title: string;
        titleEn: string;
        name: string;
        path: string;
        component: () => Promise<any>;
    } | {
        title: string;
        name: string;
        path: string;
        component: () => Promise<any>;
        titleEn?: undefined;
    })[];
} | {
    title: string;
    titleEn: string;
    type: string;
    children: {
        title: string;
        titleEn: string;
        name: string;
        path: string;
        component: () => Promise<any>;
        componentEn: () => Promise<any>;
    }[];
})[];
declare namespace _default {
    export { docs };
}
export default _default;
