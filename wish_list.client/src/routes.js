export default [
    {
        path:'/createWishlist',
        name:'CreateWishList',
        component:() => import('./components/createWishlist')
    },
    {
        path:'/account',
        name:'Account',
        component:() => import('./components/account')
    },
    {
        path:'/wishlists',
        name:'Wishlists',
        component:() => import('./components/wishlists')
    }
]