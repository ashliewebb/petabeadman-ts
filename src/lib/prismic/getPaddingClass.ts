export type PaddingOption = "Top & Bottom" | "Top Only" | "Bottom Only" | "No Margin";

export function getPaddingClass(padding?: PaddingOption): string {
    switch (padding) {
        case "Top & Bottom":
            return "section";
        case "Top Only":
            return "section sectionTopPadding";
        case "Bottom Only":
            return "section sectionBottomPadding";
        case "No Margin":
            return "section sectionNoPadding";
        default:
            return "section";
    }
}
