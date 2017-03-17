
# Header Components


### Component Signature

```html
    <t-header data-options = [[options]]  user=[[user]]>
    </t-header>
```


### Header Options

```javascript

    options = {

        // menu items 
        primaryMenus :[
            
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
                eventName : 'activity-option-selected'
            }
        ],
        
        secondaryMenus :[
        {
            scratchPad:{
             title : "Recent Search",
             icon : "icon-path",
             eventName = "recent-search-clicked",
             recent-search-count="2"}
        },
        
        shoppingCart:{
             title : "Trip Cart",
             icon : "icon-path",
             eventName = "trip-cart-link-clicked",
             cart-items-count="2"}
        }
        ],
        
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
            currencyChanged : 'currency-selection-changed'
        }

    };


    // User attribute

    // if null, then consider user is not login yet.
    user = {
        name : "John doe",
        point : '5000pt'
    }

```
## Important Information

- Count with recent searches and Tripcart to display only if greater than 0
- Country and Currency list will be provided from outside and list will open up in paper-dropdown-menu
- In Tablet only icons will be visible for tripcart and RecentSearches.
- Currently in design only 4 tabs are available but system should have implementation to handle multiple tabs in header
- Icons for loggedin and non loggedin user
- Mobile-> menu items to change, should purely derived from Header data
- Misc items to be handled from CSS like:
1. Background color of outer container.
2. Mixin (to control outer width)


## Test Cases

- Header should work in all major browsers - Chrome / Mozilla / Safari / Opera / IE etc.
- Desktop frame would be 1170 , Tablet 750 and for mobile 320
- Header email - Clicking on email should open the mail box
- Selection of Country and Currency should be visible in header till user changes it.
- Icon of loggedIn and Loggedout user should be different
- For mobile, Apart from the elements visible in header others should some in menu
- Mobile - Header display only trip cart icon. recent search should move to menu

## Steps to Start
- Set Github repository at your end for this project, we will merge them later
- You can use Google/Vaadin's elements (like calender element and textboxes etc.)
- You can use some Tavisca's elements like auto-suggest if required from https://github.com/atomelements/t-autosuggest but all the features and properties mentioned in scope should be added. (Fork the existing element and create V2)

## Performance standard
- Any component if opened via [web page tester](https://www.webpagetest.org/), it should load under 500ms (milli seconds).

## Documents
- Visual designs for search components - https://projects.invisionapp.com/share/6E9PJ7R4Q#/screens/212067485
- API access : Url - http://demo.travelnxt.com/dev
- Tavisca Elements - https://github.com/atomelements and https://github.com/travelnxtelements
- Vaadin elements - https://vaadin.com/docs/-/part/elements/elements-getting-started.html
- Google - https://elements.polymer-project.org/browse?package=google-web-components
- Tavisca Web component style Guide - https://drive.google.com/open?id=0B7BT_2nBFNYVR2tscE9pRnVJYmc
