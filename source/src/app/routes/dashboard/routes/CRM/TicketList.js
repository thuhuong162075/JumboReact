import React from "react";

import Widget from "components/Widget";
import {ticketList} from "./data";
import TicketItem from "./TicketItem";

const TicketList =()=> {


    return (
      <Widget styleName="jr-card-ticketlist">
        <div className="d-flex flex-row mb-3">
          <h4 className="mb-1"> Recent Tickets</h4>
          <span className="text-primary font-weight-medium mb-0 pointer ml-auto">See all tickets  <i
            className="zmdi zmdi-long-arrow-right jr-fs-xxl ml-2 d-inline-block align-middle"/> </span>
        </div>
        {
          ticketList.map((ticket, index) => <TicketItem key={ticket.id} data={ticket}/>)
        }
      </Widget>
    );
  }


export default TicketList;
