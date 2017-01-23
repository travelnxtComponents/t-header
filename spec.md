
# Header Components


### Component Signature

```html
    <t-header data-options = [[options]]  user=[[user]] recent-search-count="2" cart-items-count="2">
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
                selected : true,
                icon : 'hotel-icon-url',
                url : '/hotel'
            },

            // menu item with event
            {
                name : 'Activity',
                eventName : 'activity_option_selected'
            }
        ],
        
        recentSearch:{
             title : "Recent Search",
             icon : "icon-path",
             eventName = "recent_search_clicked"
        },
        
        
        tripCart:{
             title : "Trip Cart",
             icon : "icon-path",
             eventName = "trip-cart-link-clicked"
        },

        topBar : {
            registrationLink : {
                name : 'SignUp',
                icon : 'icon-url'
                url:'/register'
            },
            login : {
                name : 'SignIn',
                icon : 'icon-url'
                url : '/login'
            },
            profile :{
                name : 'Profile',
                url : '/profile'
            },
            mytrips : {
                name : 'My Trips',
                url : '/mytrips'
            },
            
            email : "enquiry@travelnxt.com",
            emailicon : 'icon-url'
            phone : "1800-948-4455",
            phoneicon : 'icon-url'
        },        

        languages : [
            {
                name : "United State(English)",
                code : "en-us"
            }
        ],

        logo : "url",

        allowCurrencies : [
            {
                name : "US Doller",
                value :"USD"
            }
        ],       

        event : {
            currencyChanged : 'currency_selection_changed'
        }

    };


    // User attribute

    // if null, then consider user is not login yet.
    user = {
        name : "John doe",
        point : '5000pt'
    }

```
## Test Cases
