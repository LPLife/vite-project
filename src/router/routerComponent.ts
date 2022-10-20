const home = () => import('@/views/home.vue');
const demo = () => import('@/views/demo.vue');
const index = () => import('@/views/index.vue');

export const componentArr = {
    home,
    demo,
    index
};
interface IPath {
    name: string,
    path: string,
    component: string
}
export const newRouter = (router = []) => {
    router.forEach(item => {
        let name = (item as IPath).component || 'index';
        (item as IPath).component = componentArr[name];
    })
    return router;
}