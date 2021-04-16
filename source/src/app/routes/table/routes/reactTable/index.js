import React from "react";
import CardBox from "components/CardBox/index";
// import ControlledTable from "./Components/ControlledTable";
// import CustomColumnWidths from "./Components/CustomColumnWidths";
// import CustomExpanderPosition from "./Components/CustomExpanderPosition";
// import EditableContent from "./Components/EditableContent";
// import CustomFiltering from "./Components/CustomFiltering";
// import FixedHeaderVerticalScroll from "./Components/FixedHeaderVerticalScroll";
// import TableFooter from "./Components/TableFooters";
import SimpleTable from "./Components/SimpleTable";

const ReactTable = () => {
  return (
    <div className="row animated slideInUpTiny animation-duration-3">
      <CardBox styleName="col-12" cardStyle=" p-0" heading="Simple Table"
               headerOutside>
        <SimpleTable/>
      </CardBox>

      {/*<CardBox styleName="col-12" cardStyle=" p-0" heading="Controlled Table"*/}
      {/*         headerOutside>*/}
      {/*  <ControlledTable/>*/}
      {/*</CardBox>*/}

      {/*<CardBox styleName="col-12" cardStyle=" p-0" heading="Custom Column Width"*/}
      {/*         headerOutside>*/}
      {/*  <CustomColumnWidths/>*/}
      {/*</CardBox>*/}

      {/*<CardBox styleName="col-12" cardStyle=" p-0" heading="Custom Expander Position"*/}
      {/*         headerOutside>*/}
      {/*  <CustomExpanderPosition/>*/}
      {/*</CardBox>*/}

      {/*<CardBox styleName="col-12" cardStyle=" p-0" heading="Custom Filtering"*/}
      {/*         headerOutside>*/}
      {/*  <CustomFiltering/>*/}
      {/*</CardBox>*/}

      {/*<CardBox styleName="col-12" cardStyle=" p-0" heading="Editable Content"*/}
      {/*         headerOutside>*/}
      {/*  <EditableContent/>*/}
      {/*</CardBox>*/}

      {/*<CardBox styleName="col-12" cardStyle=" p-0" heading="Fixed Header Vertical Scroll"*/}
      {/*         headerOutside>*/}
      {/*  <FixedHeaderVerticalScroll/>*/}
      {/*</CardBox>*/}

      {/*<CardBox styleName="col-12" cardStyle=" p-0" heading="Table Footer"*/}
      {/*         headerOutside>*/}
      {/*  <TableFooter/>*/}
      {/*</CardBox>*/}

    </div>

  );
};

export default ReactTable;

