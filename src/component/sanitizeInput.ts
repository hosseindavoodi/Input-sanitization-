const chars: Record<string, string> = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "/": "&#x2F;",
  ";": "&#x3B;",
  "(": "&#x28;",
  ")": "&#x29;",
  "'": "&#x27;",
  "&": "&amp;",
};

export const sanitizeInput = (v: string) =>
  v.replace(/<|>|"|[\/\\]|;|[(]|[)]|'/g, function (match: string) {
    return chars[match];
  });
