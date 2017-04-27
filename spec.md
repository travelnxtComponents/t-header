# Header Component

### Component Use
```javascript
<t-header data=[[data]] user=[[user]] resources=[[resources]]>
</t-header>
```

# Data
```javascript
{
    //menu items 
    "primaryMenus": [
        // menu item with url
        {
            "title": "Hotel",
            "code": "hotel",
            //iconname is mapped to resources for actual icon
            "iconName": "hotel",
            "url": "/hotel"
        },
        // menu with no url 
        {
            "title": "Activity",
            "code": "activity",
            "iconName": "activity"
        }
    ],
    "secondaryMenus": [
        {
            "title": "Trip Cart",
            "code": "cart",
            "iconName": "cart",
            "count": "2"
        }
    ],
    "topStartMenus": [
        {
            "title": "1800-958-1000",
            "iconName": "phone",
            "url": "tel:18009581000"
        },
        {
            "name": "enquiry@travelnxt.com",
            "iconName": "mail",
            "url": "mail:enquiry@travelnxt.com"
        },
    ],
    "topEndMenus": [
        {
            "title": "Recent Searches",
            "code": "recent",
            "iconName": "search",
            "count": "2"
        },
        {
            "code": "ctr-sel",
            "type": "select",
            "selectedItem": 1,
            "options": [
                {
                    "iconName": "US-Flag",
                    "title": "United States (English)",
                    "value": "EN-US"
                },
                {
                    "iconName": "In-Flag",
                    "title": "India (Hindi)",
                    "value": "hi-IN"
                },
                {
                    "iconName": "China-Flag",
                    "title": "China (Chinese)",
                    "value": "ch-CH"
                }
            ]
        },
        {
            "code": "currency-sel",
            "type": "select",
            "selectedItem": 1,
            "options": [
                {
                    "title": "U.S. Dollar",
                    "subtitle": "USD",
                    "value": "USD"
                },
                {
                    "name": "Canadian Dollar",
                    "subtitle": "CAD",
                    "value": "CAD"
                },
                {
                    "name": "Indian Rupee",
                    "subtitle": "Rs",
                    "value": "INR"
                }
            ]
        }
    ],
    "logo": {
        "title": "Hotel",
        "code": "hotel",
        "imageUrl": "http://image.com/logo.gif",
        "url": "/"
    },
}
```

# User  - to be shown on top right always if present
```javascript
{
    "isLoggedIn": false,
    "preLogin": {
        "title": "Sign Up / Sign In",
        "iconName": "user-a",
        "code": "signup",
        "url": "/register"
    },
    "postLogin": {
        "title": "John Doe",
        "iconName": "user-l",
        "code": "signedin",
        "type": "select",
        "selectedItem": 0,
        "options": [
            {
                "title": "Profile",
                "url": "/profile",
                "value": "profile"
            },
            {
                "title": "My Trips",
                "url": "/trips",
                "value": "trips"
            },
            {
                "title": "Backoffice",
                "url": "http://www.gotobackoffice.com",
                "value": "sso",
                "openInNewTab": true
            }
        ]
    }
}
```

# Resources
```javascript
{
    "icons": {
        "hotel": "hotel-icon",
        "activity": "activity-icon",
        "cart": "trip-cart-icon"
    }
}
```

# Methods
```javascript
getState() - returns current header state object
```

# Events
```javascript

Raise
/*
t-header-item-tap - {"code": "hotel"}
t-header-hotel-tap e.g t-header-{"code"}-tap  - {"code": "hotel"}
*/

Listen
/*
t-header-login  - {"code":"signedin","data":{"name":"James Smith"}} //this will change status of isLoggedIn
t-header-logout - //this will change status of isLoggedIn
t-header-item-select - {"code":"hotel"} or {"code":"currency-sel","data":{"value":"CAD"}} 
or {"code":"recent","data":{"count":"1" or "-1"}}
t-header-hotel-select - e.g t-header-{"code"}-select - {"code":"hotel"}
*/
```

# Styles
```javascript
Need variable for defining text colour - default & selected
Need variable for defining topbar background colour
Need variable for defining primary menus background colour
Need variable for defining hover or selection background colour
Need mixin for defining selected option styles
Need mixin for defining count option styles
```
# Ballpark estimates
```javascript
1 Week/ 7 man days
```

## Test Cases
- Component should work across all major browsers - Chrome / Mozilla / Safari / Opera / IE etc.
- Verify all exposed public properties are working independently and with complex combination.
- Verify all exposed methods and events are working.

## Steps to Start
- Set Github repository at your end for this project, we will merge them later
- You can use Google/Vaadin's elements (like calender element and textboxes etc.)
- You can use some Tavisca's elements like auto-suggest if required from https://github.com/atomelements/t-autosuggest but all the features and properties mentioned in scope should be added. (Fork the existing element and create V2)

## Performance standard
- Any component if opened via [web page tester](https://www.webpagetest.org/), it should load under 500ms (milli seconds).

## Documents
- Visual designs for Footer components - https://projects.invisionapp.com/share/6E9PJ7R4Q#/screens/212067485
- API access : Url - http://demo.travelnxt.com/dev
- Tavisca Elements - https://github.com/atomelements and https://github.com/travelnxtelements
- Vaadin elements - https://vaadin.com/docs/-/part/elements/elements-getting-started.html
- Google - https://elements.polymer-project.org/browse?package=google-web-components
- Tavisca Web component style Guide - https://drive.google.com/open?id=0B7BT_2nBFNYVR2tscE9pRnVJYmc
