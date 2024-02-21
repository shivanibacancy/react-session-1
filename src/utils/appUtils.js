import _ from "lodash";

export const returnPaginationRange = (totalPage, page, limit, siblings) => {
    let totalPageNoInArray = 7 + siblings;
    if(totalPageNoInArray >= totalPage) {
        _.range(1, totalPage + 1)
    }

    let showLeftSiblingsIndex = Math.max(page - siblings, 1);  //value will not be -ve and will be 1 or greater
    let showRightSiblingsIndex = Math.min(page + siblings, totalPage);
    let showLeftDots = showLeftSiblingsIndex > 2

    let showRightDots = showRightSiblingsIndex < totalPage - 2;

    if(!showLeftDots && showRightDots) {
        let leftItemsCount = 3 + 2 * siblings;
        let leftRange = _.range(1, leftItemsCount + 1);
        return [...leftRange, " ...", totalPage];

    } else if (showLeftDots && !showRightDots) {
        let rightItemsCount = 3 + 2 * siblings;
        let rightRange = _.range(totalPage - rightItemsCount + 1, totalPage+1);
        return [1, "... ", rightRange];
    } else {
        let middleRange = _.range(showLeftSiblingsIndex, showRightSiblingsIndex + 1);
        return [1, "... ", ...middleRange, "... ", totalPage];
    }
}