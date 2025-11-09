function setProps1(el, propsNew) {
  const propsOld = (el).__props || ((el).__props = {});
  for (const k in propsOld) {
    if (!(k in propsNew)) {
      if (k === "style") el.style.cssText = "";
      else if (k.startsWith("on")) el[k.toLowerCase()] = null;
      else if (k === "class") el.removeAttribute("class");
      else el.removeAttribute(k);
    }
  }
  for (const k in propsNew) {
    const vNew = propsNew[k];
    const vOld = propsOld[k];
    if (vNew === vOld) continue;
    propsOld[k] = vNew;
    if (k === "style" && typeof vNew === "object" && vNew) {
      const s = el.style;
      for (const sk in { ...vOld, ...vNew }) {
        if (!(sk in vNew) || vNew[sk] === undefined) s[sk] = "";
        else if (!vOld || vOld[sk] !== vNew[sk]) s[sk] = vNew[sk];
      }
    } else if (k === "class") el.className = vNew ?? "";
    else if (k.startsWith("on")) el[k.toLowerCase()] = typeof vNew === "function" ? vNew : null;
    else if (vNew === undefined) el.removeAttribute(k);
    else el.setAttribute(k, vNew);
  }
  el.__props = propsNew;
}

function setProps2(el, props) {
  const data = (el).__props ||= {};
  const style = el.style;
  const seen = new Set(Object.keys(props));

  // Set/update new/changed props
  for (const k in props) {
    const v = props[k], prev = data[k];
    if (v === prev) continue;
    data[k] = v;

    if (k === "style" && v && typeof v === "object") {
      const o = prev || {}, n = v;
      for (const s in o) if (!(s in n)) style.removeProperty(s);
      for (const s in n) if (o[s] !== n[s]) style.setProperty(s, n[s]);
    } else if (k === "class") el.className = v ?? "";
    else if (k.startsWith("on")) el[k.toLowerCase()] = typeof v === "function" ? v : null;
    else if (v === undefined) el.removeAttribute(k);
    else el.setAttribute(k, v);
  }

  // Remove deleted props
  for (const k in data) {
    if (seen.has(k)) continue;
    if (k === "style") style.cssText = "";
    else if (k.startsWith("on")) el[k.toLowerCase()] = null;
    else if (k === "class") el.className = "";
    else el.removeAttribute(k);
    delete data[k];
  }
  el.__props = props;
}

function setProps3(el, props) {
  const old = (el).__props || ((el).__props = {});
  const style = el.style;
  const keys = Object.keys({ ...old, ...props });

  keys.forEach(k => {
    const v = props[k];
    const prev = old[k];

    if (v === prev) return;

    if (!(k in props)) {
      // Removed
      if (k === "style") style.cssText = "";
      else if (k.startsWith("on")) el[k.toLowerCase()] = null;
      else if (k !== "class") el.removeAttribute(k);
      else el.className = "";
      delete old[k];
    } else if (k === "style" && v && typeof v === "object") {
      // Style object diff
      const sOld = prev || {};
      const sNew = v;
      const all = new Set([...Object.keys(sOld), ...Object.keys(sNew)]);
      all.forEach(sk => {
        const nv = sNew[sk];
        if (nv === undefined) style[sk] = "";
        else if (sOld[sk] !== nv) style[sk] = nv;
      });
      old[k] = v;
    } else {
      // Regular prop
      old[k] = v;
      if (k === "class") el.className = v ?? "";
      else if (k.startsWith("on")) el[k.toLowerCase()] = typeof v === "function" ? v : null;
      else if (v === undefined) el.removeAttribute(k);
      else el.setAttribute(k, v);
    }
  });
  el.__props = props;
}