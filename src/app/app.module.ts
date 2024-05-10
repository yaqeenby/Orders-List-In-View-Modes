import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Directive1} from "./tryDirectives/directive1";
import {Directive2} from "./tryDirectives/directive2";
import {Directive3} from "./tryDirectives/directive3";
import {Directive4} from "./tryDirectives/directive4";
import {ActiveUsersComponent} from "./active-users/active-users.component";
import {InactiveUsersComponent} from "./inactive-users/inactive-users.component";
import {Users} from "./services/users";
import {CounterService} from "./services/counterService";
import { OrdersComponent } from './orders/orders.component';
import { OrderCardComponent } from './orders/order-card/order-card.component';
import { OrdersBoardComponent } from './orders/orders-board/orders-board.component';
import { OrdersColumnComponent } from './orders/orders-board/orders-column/orders-column.component';
import { ColoredBadgeComponent } from './colored-badge/colored-badge.component';
import { ColoredProgressComponent } from './colored-progress/colored-progress.component';
import { HeaderComponent } from './orders/header/header.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { OrderCalenderBoardComponent } from './orders/order-calender-board/order-calender-board.component';
import { OrderRowComponent } from './orders/order-row/order-row.component';
import { OrdersTableComponent } from './orders/orders-table/orders-table.component';
import {CdkListboxModule} from "@angular/cdk/listbox";
import { CircularProgressComponent } from './circular-progress/circular-progress.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { ItemsComponent } from './items/items.component';
import { AddItemComponent } from './items/add-item/add-item.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ItemSectionComponent } from './items/add-item/item-section/item-section.component';
import { ActiveOrdersComponent } from './orders/active-orders/active-orders.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './tasks/card/card.component';
import { BoardComponent } from './tasks/board/board.component';
import { ColumnComponent } from './tasks/column/column.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    Directive1,
    Directive2,
    Directive3,
    Directive4,
    ActiveUsersComponent,
    InactiveUsersComponent,
    OrdersComponent,
    OrderCardComponent,
    OrdersBoardComponent,
    OrdersColumnComponent,
    ColoredBadgeComponent,
    ColoredProgressComponent,
    HeaderComponent,
    OrderCalenderBoardComponent,
    OrderRowComponent,
    OrdersTableComponent,
    CircularProgressComponent,
    AddOrderComponent,
    ItemsComponent,
    AddItemComponent,
    ItemSectionComponent,
    ActiveOrdersComponent,
    AddCompanyComponent,
    TasksComponent,
    CardComponent,
    BoardComponent,
    ColumnComponent,
    HeaderBarComponent,
    NavBarComponent,
  ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        BrowserAnimationsModule,
        CdkListboxModule,
        MatOptionModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [Users, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
