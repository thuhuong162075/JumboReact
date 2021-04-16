import React from 'react';
import CustomScrollbars from 'util/CustomScrollbars';
import Navigation from "../../components/Navigation";

const SideBarContent = () => {
  const navigationMenus = [
    {
      name: 'sidebar.main',
      type: 'section',
      children: [
        {
          name: 'sidebar.dashboard',
          icon: 'view-dashboard',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.dashboard.crypto',
              type: 'item',
              link: '/app/dashboard/crypto'
            },
            {
              name: 'sidebar.dashboard.listing',
              type: 'item',
              link: '/app/dashboard/listing'
            },
            {
              name: 'sidebar.dashboard.crm',
              type: 'item',
              link: '/app/dashboard/crm'
            },
            {
              name: 'sidebar.dashboard.intranet',
              type: 'item',
              link: '/app/dashboard/intranet'
            },
            {
              name: 'sidebar.dashboard.ecommerce',
              type: 'item',
              link: '/app/dashboard/eCommerce'
            },
            {
              name: 'sidebar.dashboard.news',
              type: 'item',
              link: '/app/dashboard/news'
            },
            {
              name: 'sidebar.dashboard.misc',
              type: 'item',
              link: '/app/dashboard/misc'
            }
          ]
        },
        {
          name: 'sidebar.components',
          icon: 'folder',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.components.alerts',
              type: 'item',
              link: '/app/components/alerts'
            },
            {
              name: 'sidebar.components.appbar',
              type: 'item',
              link: '/app/components/appbar'
            },
            {
              name: 'sidebar.components.autocomplete',
              type: 'item',
              link: '/app/components/auto-complete'
            },
            {
              name: 'sidebar.components.avatars',
              type: 'item',
              link: '/app/components/avatars'
            },
            {
              name: 'sidebar.components.badge',
              type: 'item',
              link: '/app/components/badges'
            },
            {
              name: 'sidebar.components.bottomNavigation',
              type: 'item',
              link: '/app/components/bottom-navigation'
            },
            {
              name: 'sidebar.components.breadcrumbs',
              type: 'item',
              link: '/app/components/breadcrumbs'
            },
            {
              name: 'sidebar.components.buttons',
              type: 'item',
              link: '/app/components/buttons'
            },
            {
              name: 'sidebar.components.buttonGroup',
              type: 'item',
              link: '/app/components/button-group'
            },
            {
              name: 'sidebar.components.cards',
              type: 'item',
              link: '/app/components/cards'
            },
            {
              name: 'sidebar.components.carousel',
              type: 'item',
              link: '/app/components/carousel'
            },
            {
              name: 'sidebar.components.chips',
              type: 'item',
              link: '/app/components/chips'
            },
            {
              name: 'sidebar.components.colorPicker',
              type: 'item',
              link: '/app/components/color-picker'
            },
            {
              name: 'sidebar.components.dialogs',
              type: 'item',
              link: '/app/components/dialogs'
            },
            {
              name: 'sidebar.components.dividers',
              type: 'item',
              link: '/app/components/dividers'
            },
            {
              name: 'sidebar.components.expansionPanel',
              type: 'item',
              link: '/app/components/expansion-panel'
            },
            {
              name: 'sidebar.components.drawer',
              type: 'item',
              link: '/app/components/drawer'
            },
            {
              name: 'sidebar.components.gridList',
              type: 'item',
              link: '/app/components/grid-list'
            },
            {
              name: 'sidebar.components.lists',
              type: 'item',
              link: '/app/components/list'
            },
            {
              name: 'sidebar.components.menusPaper',
              type: 'item',
              link: '/app/components/menu-paper'
            },
            {
              name: 'sidebar.components.pickers',
              type: 'item',
              link: '/app/components/pickers'
            },
            {
              name: 'sidebar.components.popovers',
              type: 'item',
              link: '/app/components/popovers'
            },
            {
              name: 'sidebar.components.progress',
              type: 'item',
              link: '/app/components/progressbar'
            },
            {
              name: 'sidebar.components.selects',
              type: 'item',
              link: '/app/components/selects'
            },
            {
              name: 'sidebar.components.selectionControl',
              type: 'item',
              link: '/app/components/selection'
            },
            {
              name: 'sidebar.components.snackbars',
              type: 'item',
              link: '/app/components/snackbar'
            },
            {
              name: 'sidebar.components.stepper',
              type: 'item',
              link: '/app/components/stepper'
            },
            {
              name: 'sidebar.components.tables',
              type: 'item',
              link: '/app/components/tables'
            },
            {
              name: 'sidebar.components.tabs',
              type: 'item',
              link: '/app/components/tabs'
            },
            {
              name: 'sidebar.components.textFields',
              type: 'item',
              link: '/app/components/text-fields'
            },
            {
              name: 'sidebar.components.tooltips',
              type: 'item',
              link: '/app/components/tooltips'
            },
            {
              name: 'sidebar.components.typography',
              type: 'item',
              link: '/app/components/typography'
            }
          ]
        },
        {
          name: 'sidebar.widgets',
          icon: 'widgets',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.classic',
              type: 'item',
              link: '/app/widgets/classic'
            },
            {
              name: 'sidebar.modern',
              type: 'item',
              link: '/app/widgets/modern'
            },
          ]
        },
        {
          name: 'sidebar.metrics',
          icon: 'trending-up',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.classic',
              type: 'item',
              link: '/app/metrics/classic'
            },
            {
              name: 'sidebar.modern',
              type: 'item',
              link: '/app/metrics/modern'
            },
          ]
        }
      ]
    },
    {
      name: 'sidebar.inBuiltApp',
      type: 'section',
      children: [
        {
          name: 'sidebar.appModule.mail',
          type: 'item',
          icon: 'email',
          link: '/app/mail'
        },
        {
          name: 'sidebar.appModule.toDo',
          type: 'item',
          icon: 'check-square',
          link: '/app/to-do'
        },
        {
          name: 'sidebar.appModule.contact',
          type: 'item',
          icon: 'account-box',
          link: '/app/contact'
        },
        {
          name: 'sidebar.appModule.chat',
          type: 'item',
          icon: 'comment',
          link: '/app/chat'
        }
      ]
    },
    {
      name: 'sidebar.inBuiltReduxApp',
      type: 'section',
      children: [
        {
          name: 'sidebar.appModule.mail',
          type: 'item',
          icon: 'email',
          link: '/app/mail-redux'
        },
        {
          name: 'sidebar.appModule.toDo',
          type: 'item',
          icon: 'check-square',
          link: '/app/to-do-redux'
        },
        {
          name: 'sidebar.appModule.contact',
          type: 'item',
          icon: 'account-box',
          link: '/app/contact-redux'
        },
        {
          name: 'sidebar.appModule.chat',
          type: 'item',
          icon: 'comment',
          link: '/app/chat-redux'
        }
      ]
    },
    {
      name: 'sidebar.social',
      type: 'section',
      children: [
        {
          name: 'sidebar.profile',
          type: 'item',
          icon: 'email',
          link: '/app/social-apps/profile'
        },
        {
          name: 'sidebar.wall',
          type: 'item',
          icon: 'check-square',
          link: '/app/social-apps/wall'
        }
      ]
    },
    {
      name: 'sidebar.view',
      type: 'section',
      children: [
        {
          name: 'sidebar.tables',
          icon: 'view-web',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.tables.basicTable',
              type: 'item',
              link: '/app/table/basic'
            },
            {
              name: 'sidebar.tables.dataTable',
              type: 'item',
              link: '/app/table/data'
            }
          ]
        },
        {
          name: 'sidebar.timeLine',
          icon: 'swap-alt zmdi-hc-rotate-90',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.timeLine.default',
              type: 'item',
              link: '/app/time-line/default'
            },
            {
              name: 'sidebar.timeLine.defaultwithIcons',
              type: 'item',
              link: '/app/time-line/default-with-icon'
            },
            {
              name: 'sidebar.timeLine.leftAligned',
              type: 'item',
              link: '/app/time-line/left-align'
            },
            {
              name: 'sidebar.timeLine.zigzag',
              type: 'item',
              link: '/app/time-line/zigzag'
            }
          ]
        },
        {
          name: 'sidebar.customViews',
          icon: 'view-list',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.customViews.plainListView',
              type: 'item',
              link: '/app/custom-views/simple-list'
            },
            {
              name: 'sidebar.customViews.withDivider',
              type: 'item',
              link: '/app/custom-views/strip-list'
            },
            {
              name: 'sidebar.customViews.cardListView',
              type: 'item',
              link: '/app/custom-views/card-list'
            }
          ]
        }
      ]
    },
    {
      name: 'sidebar.form',
      type: 'section',
      children: [
        {
          name: 'sidebar.forms',
          icon: 'book-image',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.forms.components',
              type: 'item',
              link: '/app/form/components'
            },
            {
              name: 'sidebar.forms.stepper',
              type: 'item',
              link: '/app/form/stepper'
            }
          ]
        }
      ]
    },
    {
      name: 'sidebar.extensions',
      type: 'section',
      children: [
        {
          name: 'sidebar.editors',
          icon: 'code-setting',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.editors.CKEditor',
              type: 'item',
              link: '/app/editor/ck'
            },
            {
              name: 'sidebar.editors.WYSISWYGEditor',
              type: 'item',
              link: '/app/editor/wysiswyg'
            }
          ]
        },
        {
          name: 'sidebar.pickers',
          icon: 'brush',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.pickers.dateTimePickers',
              type: 'item',
              link: '/app/pickers/date-time'
            },
            {
              name: 'sidebar.pickers.colorPickers',
              type: 'item',
              link: '/app/pickers/color'
            }
          ]
        },
        {
          name: 'sidebar.extensions',
          icon: 'key',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.extensions.dragNDrop',
              type: 'item',
              link: '/app/extensions/dnd'
            },
            {
              name: 'sidebar.extensions.dropzone',
              type: 'item',
              link: '/app/extensions/dropzone'
            },
            {
              name: 'sidebar.extensions.sweetAlert',
              type: 'item',
              link: '/app/extensions/sweet-alert'
            },
            {
              name: 'sidebar.extensions.notification',
              type: 'item',
              link: '/app/extensions/notification'
            }
          ]
        },
        {
          name: 'sidebar.chart',
          icon: 'chart',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.chart.line',
              type: 'item',
              link: '/app/chart/line'
            },
            {
              name: 'sidebar.chart.bar',
              type: 'item',
              link: '/app/chart/bar'
            },
            {
              name: 'sidebar.chart.area',
              type: 'item',
              link: '/app/chart/area'
            },
            {
              name: 'sidebar.chart.composed',
              type: 'item',
              link: '/app/chart/composed'
            },
            {
              name: 'sidebar.chart.scatter',
              type: 'item',
              link: '/app/chart/scatter'
            },
            {
              name: 'sidebar.chart.pie',
              type: 'item',
              link: '/app/chart/pie'
            },
            {
              name: 'sidebar.chart.radial',
              type: 'item',
              link: '/app/chart/radial'
            },
            {
              name: 'sidebar.chart.radar',
              type: 'item',
              link: '/app/chart/radar'
            },
            {
              name: 'sidebar.chart.tree',
              type: 'item',
              link: '/app/chart/treemap'
            }
          ]
        },
        {
          name: 'sidebar.map',
          icon: 'google-maps',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.map.simple',
              type: 'item',
              link: '/app/map/simple'
            },
            {
              name: 'sidebar.map.styled',
              type: 'item',
              link: '/app/map/styled'
            },
            {
              name: 'sidebar.map.geoLocation',
              type: 'item',
              link: '/app/map/geo-location'
            },
            {
              name: 'sidebar.map.mapDirection',
              type: 'item',
              link: '/app/map/directions'
            },
            {
              name: 'sidebar.map.overlay',
              type: 'item',
              link: '/app/map/overlay'
            },
            {
              name: 'sidebar.map.kmLayer',
              type: 'item',
              link: '/app/map/kml'
            },
            {
              name: 'sidebar.map.popupInfo',
              type: 'item',
              link: '/app/map/popup-info'
            },
            {
              name: 'sidebar.map.streetView',
              type: 'item',
              link: '/app/map/street-view'
            },
            {
              name: 'sidebar.map.eventListener',
              type: 'item',
              link: '/app/map/event'
            },
            {
              name: 'sidebar.map.mapDrawing',
              type: 'item',
              link: '/app/map/drawing'
            },
            {
              name: 'sidebar.map.mapClustering',
              type: 'item',
              link: '/app/map/clustering'
            }
          ]
        },
      ]
    },
    {
      name: 'sidebar.modules',
      type: 'section',
      children: [
        {
          name: 'sidebar.calendar',
          icon: 'calendar',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.calendar.basic',
              type: 'item',
              link: '/app/calendar/basic'
            },
            {
              name: 'sidebar.calendar.cultures',
              type: 'item',
              link: '/app/calendar/cultures'
            },
            {
              name: 'sidebar.calendar.popup',
              type: 'item',
              link: '/app/calendar/popup'
            },
            {
              name: 'sidebar.calendar.rendering',
              type: 'item',
              link: '/app/calendar/rendering'
            },
            {
              name: 'sidebar.calendar.selectable',
              type: 'item',
              link: '/app/calendar/selectable'
            },
            {
              name: 'sidebar.calendar.timeslots',
              type: 'item',
              link: '/app/calendar/timeslots'
            }
          ]
        },
        {
          name: 'sidebar.eCommerce',
          icon: 'shopping-cart',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.eCommerce.productsList',
              type: 'item',
              link: '/app/ecommerce/products-list'
            },
            {
              name: 'sidebar.eCommerce.productsGrid',
              type: 'item',
              link: '/app/ecommerce/products-grid'
            }
          ]
        },
        {
          name: 'sidebar.appModule',
          icon: 'collection-item-8',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.appModule.login1',
              type: 'item',
              link: '/app/app-module/login-1'
            },
            {
              name: 'sidebar.appModule.login2',
              type: 'item',
              link: '/app/app-module/login-2'
            },
            {
              name: 'sidebar.appModule.loginStepper',
              type: 'item',
              link: '/app/app-module/login-with-stepper'
            },
            {
              name: 'sidebar.appModule.signup1',
              type: 'item',
              link: '/app/app-module/sign-up-1'
            },
            {
              name: 'sidebar.appModule.signup2',
              type: 'item',
              link: '/app/app-module/sign-up-2'
            },
            {
              name: 'sidebar.appModule.forgotPassword1',
              type: 'item',
              link: '/app/app-module/forgot-password-1'
            },
            {
              name: 'sidebar.appModule.forgotPassword2',
              type: 'item',
              link: '/app/app-module/forgot-password-2'
            },
            {
              name: 'sidebar.appModule.lock1',
              type: 'item',
              link: '/app/app-module/lock-screen-1'
            },
            {
              name: 'sidebar.appModule.lock2',
              type: 'item',
              link: '/app/app-module/lock-screen-2'
            }
          ]
        }
      ]
    },
    {
      name: 'sidebar.extras',
      type: 'section',
      children: [
        {
          name: 'sidebar.icons',
          icon: 'view-web',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.icons.material',
              type: 'item',
              link: '/app/icons/material'
            }
          ]
        },
        {
          name: 'sidebar.extraElements',
          icon: 'collection-bookmark zmdi-hc-rotate-90',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.extraElements.pricingTable',
              type: 'item',
              link: '/app/extra-elements/pricing-table'
            },
            {
              name: 'sidebar.extraElements.callouts',
              type: 'item',
              link: '/app/extra-elements/callouts'
            },
            {
              name: 'sidebar.extraElements.testimonials',
              type: 'item',
              link: '/app/extra-elements/testimonials'
            }
          ]
        },
        {
          name: 'sidebar.extraPages',
          icon: 'pages',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.extraPages.aboutUs',
              type: 'item',
              link: '/app/extra-pages/about-us'
            },
            {
              name: 'sidebar.extraPages.contactUs',
              type: 'item',
              link: '/app/extra-pages/contact-us'
            },
            {
              name: 'sidebar.extraPages.blog',
              type: 'item',
              link: '/app/extra-pages/blog'
            },
            {
              name: 'sidebar.extraPages.faq',
              type: 'item',
              link: '/app/extra-pages/faq'
            },
            {
              name: 'sidebar.extraPages.portfolio',
              type: 'item',
              link: '/app/extra-pages/portfolio'
            },
            {
              name: 'sidebar.extraPages.404',
              type: 'item',
              link: '/app/extra-pages/error-404'
            },
            {
              name: 'sidebar.extraPages.500',
              type: 'item',
              link: '/app/extra-pages/error-500'
            }
          ]
        },
        {
          name: 'sidebar.menuLevels',
          icon: 'device-hub',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.menuLevels.level1',
              type: 'item',
              link: '/app/menu-levels/level-1'
            },
            {
              name: 'sidebar.menuLevels.level1',
              type: 'collapse',
              children: [
                {
                  name: 'sidebar.menuLevels.level2',
                  type: 'item',
                  link: '/app/menu-levels/level-2'
                },
                {
                  name: 'sidebar.menuLevels.level2',
                  type: 'collapse',
                  children: [
                    {
                      name: 'sidebar.menuLevels.level3',
                      type: 'item',
                      link: '/app/menu-levels/level-3'
                    },
                    {
                      name: 'sidebar.menuLevels.level3',
                      type: 'item',
                      link: '/app/menu-levels/level-3-2'
                    }
                  ]
                },
              ]
            }
          ]
        }
      ]
    }
  ];

  return (
    <CustomScrollbars className=" scrollbar">
      <Navigation menuItems={navigationMenus}/>
    </CustomScrollbars>
  );
};

export default SideBarContent;
