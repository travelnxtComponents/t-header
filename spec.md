
# Header Components


### Component Signature

```html
    <t-header data-options = [[options]] >
    </t-header>
```


### Header Options

```javascript

    options = {

        // menu items 
        menus :[
            
            // menu item with url
            {
                name : 'Hotel',
                url : '/hotel'
            },

            // menu item with event
            {
                name : 'Activity',
                eventName : 'activity_option_selected'
            }
        ],

        topBar : {
            registrationLink : {
                name : 'Register',
                url:'/register'
            },
            login : {
                name : 'Login',
                url : '/login'
            },
            profile :{
                name : 'Profile',
                url : '/profile'
            },
            mytrips : {
                name : 'My Trips',
                url : '/mytrips'
            } 
        },

        // if null, then consider user is not login yet.
        user : {
            name : "John doe",
            point : '5000pt'
        }

        event : {
            userSearchEventName : 'user_search_clicked',
            cartIconClicked : 'cart_icon_clicked'
        }

    }

```
