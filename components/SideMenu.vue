<script>
</script>
<template>
    <div class="sideMenu">
        <div class="sideMenu__header">
            <span class="sideMenu__logo"><Icon class="sideMenu__logo-icon" name="ic:round-shopping-cart"/>Shopper</span>
            <button class="sideMenu__toggle"><Icon name="material-symbols:arrow-back-rounded"/></button>
        </div>
        <div class="sideMenu__container">
            
            <nav class="sideMenu__navigation">
                <div>
                    <span class="sideMenu__navigation-header">MENU</span>
                    <ul class="sideMenu__list">
                        <li class="sideMenu__item">
                            <a href="#">
                                <Icon name="radix-icons:dashboard"/>Dashboard<Icon class="sideMenu__icon-dropdown" name="material-symbols:keyboard-arrow-down"/>
                            </a>
        
                            <div class="sideMenu__sublist">
                                <ul>
                                    <li>
                                    <a href="#">
                                        eCommerce
                                    </a>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li class="sideMenu__item">
                            <a href="">
                                <Icon name="material-symbols:calendar-month-outline"/>Calendar
                            </a>
                        </li>
                        <li class="sideMenu__item">
                            <a href="">
                                <Icon name="ic:outline-person"/>Profile
                            </a>
                        </li>
                        <li class="sideMenu__item">
                            <a href="">
                                <icon name="material-symbols:format-image-left"/>Forms
                            </a>
                        </li>
                        <li class="sideMenu__item">
                            <a href="">
                                <Icon name="material-symbols:table-chart-outline"/>Tables
                            </a>
                        </li>
                        <li class="sideMenu__item">
                            <a href="">
                                <Icon name="material-symbols:settings-outline"/>Settings
                            </a>
                        </li>
                    </ul>
                    <span class="sideMenu__navigation-header">OTHERS</span>
                    <ul class="sideMenu__list">
                        <li class="sideMenu__item">
                            <a href=""><icon name="material-symbols:format-image-left"/>Forms<Icon class="sideMenu__icon-dropdown" name="material-symbols:keyboard-arrow-down"/></a>
                            
                            <div class="sideMenu__sublist">
                                <ul>
                                    <li>
                                    <a href="#">
                                        Questions
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#">
                                        Returns
                                    </a>
                                    </li>
                                </ul>
                            </div>

                        </li>
                        <li class="sideMenu__item">
                            <a href=""><Icon name="material-symbols:table-chart-outline"/>Tables</a>
                        </li>
                        <li class="sideMenu__item">
                            <a href=""><Icon name="material-symbols:settings-outline"/>Settings</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>