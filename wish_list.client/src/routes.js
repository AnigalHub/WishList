export default [
    {
        path:'/',
        component:() => import('./components/registration'),
        children:[
            {
                path:'',
                name:'SignUp',
                component:() => import('./components/signUp'),
            },
            {
                path:'/logIn',
                name:'LogIn',
                component:() => import('./components/logIn'),
            }
        ]
    },
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