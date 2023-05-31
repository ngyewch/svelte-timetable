import { S as SvelteComponentDev, Q as init, R as safe_not_equal, U as dispatch_dev, V as validate_each_argument, W as validate_slots, X as createEventDispatcher, Y as onMount, Z as onDestroy, _ as format, $ as element, a0 as space, a1 as attr_dev, a2 as add_location, a3 as set_style, a4 as insert_dev, a5 as append_dev, a6 as listen_dev, a7 as noop, a8 as detach_dev, a9 as destroy_each, aa as binding_callbacks, ab as empty, ac as text, ad as set_data_dev, ae as run_all, af as dist, ag as parse, ah as globals, ai as create_component, aj as mount_component, ak as transition_in, al as transition_out, am as destroy_component, an as Logo_square, ao as Logo_dark, ap as createRouter, aq as createWebHistory, ar as createWebHashHistory, as as useDark, at as useToggle, k as watch, au as markRaw, E as reactive, d as defineComponent, r as ref, av as watchEffect, o as openBlock, q as createBlock, aw as mergeProps, ax as resolveDynamicComponent, h as createCommentVNode } from "./vendor-9deb532e.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/svelte-timetable/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const Timetable_svelte_svelte_type_style_lang = "";
const file = "src/Timetable.svelte";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[25] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[28] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[31] = list[i];
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[34] = list[i];
  return child_ctx;
}
function get_each_context_4(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[25] = list[i];
  return child_ctx;
}
function get_each_context_5(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[28] = list[i];
  return child_ctx;
}
function create_each_block_5(ctx) {
  let div;
  let t0_value = (
    /*entity*/
    ctx[28].name + ""
  );
  let t0;
  let t1;
  const block = {
    c: function create() {
      div = element("div");
      t0 = text(t0_value);
      t1 = space();
      attr_dev(div, "class", "row s-fYuJJuH3TGkt");
      add_location(div, file, 141, 20, 3968);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, t0);
      append_dev(div, t1);
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*groups*/
      1 && t0_value !== (t0_value = /*entity*/
      ctx2[28].name + ""))
        set_data_dev(t0, t0_value);
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_5.name,
    type: "each",
    source: "(141:16) {#each group.entities as entity}",
    ctx
  });
  return block;
}
function create_each_block_4(ctx) {
  let div;
  let t;
  let each_1_anchor;
  let each_value_5 = (
    /*group*/
    ctx[25].entities
  );
  validate_each_argument(each_value_5);
  let each_blocks = [];
  for (let i = 0; i < each_value_5.length; i += 1) {
    each_blocks[i] = create_each_block_5(get_each_context_5(ctx, each_value_5, i));
  }
  const block = {
    c: function create() {
      div = element("div");
      t = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
      attr_dev(div, "class", "row group-header s-fYuJJuH3TGkt");
      add_location(div, file, 138, 16, 3845);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      insert_dev(target, t, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(target, anchor);
        }
      }
      insert_dev(target, each_1_anchor, anchor);
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*groups*/
      1) {
        each_value_5 = /*group*/
        ctx2[25].entities;
        validate_each_argument(each_value_5);
        let i;
        for (i = 0; i < each_value_5.length; i += 1) {
          const child_ctx = get_each_context_5(ctx2, each_value_5, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_5(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_5.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      if (detaching)
        detach_dev(t);
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach_dev(each_1_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_4.name,
    type: "each",
    source: "(138:12) {#each groups as group}",
    ctx
  });
  return block;
}
function create_each_block_3(ctx) {
  let div;
  let t0_value = (
    /*formatHour*/
    ctx[5](
      /*hour*/
      ctx[34]
    ) + ""
  );
  let t0;
  let t1;
  let div_class_value;
  const block = {
    c: function create() {
      div = element("div");
      t0 = text(t0_value);
      t1 = space();
      attr_dev(div, "class", div_class_value = "timeline-header-cell " + /*hour*/
      (ctx[34] % 2 ? "even" : "odd") + " s-fYuJJuH3TGkt");
      add_location(div, file, 152, 24, 4376);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, t0);
      append_dev(div, t1);
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*hours*/
      2 && t0_value !== (t0_value = /*formatHour*/
      ctx2[5](
        /*hour*/
        ctx2[34]
      ) + ""))
        set_data_dev(t0, t0_value);
      if (dirty[0] & /*hours*/
      2 && div_class_value !== (div_class_value = "timeline-header-cell " + /*hour*/
      (ctx2[34] % 2 ? "even" : "odd") + " s-fYuJJuH3TGkt")) {
        attr_dev(div, "class", div_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_3.name,
    type: "each",
    source: "(152:20) {#each hours as hour}",
    ctx
  });
  return block;
}
function create_each_block_2(ctx) {
  let div1;
  let div0;
  let t_value = (
    /*entry*/
    ctx[31].text + ""
  );
  let t;
  let div1_title_value;
  let mounted;
  let dispose;
  function click_handler(...args) {
    return (
      /*click_handler*/
      ctx[15](
        /*group*/
        ctx[25],
        /*entity*/
        ctx[28],
        /*entry*/
        ctx[31],
        ...args
      )
    );
  }
  function contextmenu_handler(...args) {
    return (
      /*contextmenu_handler*/
      ctx[16](
        /*group*/
        ctx[25],
        /*entity*/
        ctx[28],
        /*entry*/
        ctx[31],
        ...args
      )
    );
  }
  const block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      t = text(t_value);
      attr_dev(div0, "class", "time-entry-content s-fYuJJuH3TGkt");
      add_location(div0, file, 174, 36, 5601);
      attr_dev(div1, "class", "time-entry s-fYuJJuH3TGkt");
      set_style(
        div1,
        "left",
        /*entry*/
        ctx[31].getLeft()
      );
      set_style(
        div1,
        "width",
        /*entry*/
        ctx[31].getWidth()
      );
      attr_dev(div1, "title", div1_title_value = getPopupText(
        /*entry*/
        ctx[31]
      ));
      add_location(div1, file, 170, 32, 5227);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, t);
      if (!mounted) {
        dispose = [
          listen_dev(div1, "click", click_handler, false, false, false, false),
          listen_dev(div1, "contextmenu", contextmenu_handler, false, false, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*groups*/
      1 && t_value !== (t_value = /*entry*/
      ctx[31].text + ""))
        set_data_dev(t, t_value);
      if (dirty[0] & /*groups*/
      1) {
        set_style(
          div1,
          "left",
          /*entry*/
          ctx[31].getLeft()
        );
      }
      if (dirty[0] & /*groups*/
      1) {
        set_style(
          div1,
          "width",
          /*entry*/
          ctx[31].getWidth()
        );
      }
      if (dirty[0] & /*groups*/
      1 && div1_title_value !== (div1_title_value = getPopupText(
        /*entry*/
        ctx[31]
      ))) {
        attr_dev(div1, "title", div1_title_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div1);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_2.name,
    type: "each",
    source: "(170:28) {#each entity.entries as entry}",
    ctx
  });
  return block;
}
function create_each_block_1(ctx) {
  let div;
  let mounted;
  let dispose;
  let each_value_2 = (
    /*entity*/
    ctx[28].entries
  );
  validate_each_argument(each_value_2);
  let each_blocks = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  function click_handler_1(...args) {
    return (
      /*click_handler_1*/
      ctx[17](
        /*group*/
        ctx[25],
        /*entity*/
        ctx[28],
        ...args
      )
    );
  }
  function contextmenu_handler_1(...args) {
    return (
      /*contextmenu_handler_1*/
      ctx[18](
        /*group*/
        ctx[25],
        /*entity*/
        ctx[28],
        ...args
      )
    );
  }
  const block = {
    c: function create() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr_dev(div, "class", "timeline s-fYuJJuH3TGkt");
      add_location(div, file, 166, 24, 4942);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
      if (!mounted) {
        dispose = [
          listen_dev(div, "click", click_handler_1, false, false, false, false),
          listen_dev(div, "contextmenu", contextmenu_handler_1, false, false, false, false)
        ];
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty[0] & /*groups, onClick, onContextMenu*/
      385) {
        each_value_2 = /*entity*/
        ctx[28].entries;
        validate_each_argument(each_value_2);
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx, each_value_2, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_2(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_2.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block_1.name,
    type: "each",
    source: "(166:20) {#each group.entities as entity}",
    ctx
  });
  return block;
}
function create_each_block(ctx) {
  let div0;
  let h3;
  let t0_value = (
    /*group*/
    ctx[25].name + ""
  );
  let t0;
  let t1;
  let div1;
  let t2;
  let each_value_1 = (
    /*group*/
    ctx[25].entities
  );
  validate_each_argument(each_value_1);
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const block = {
    c: function create() {
      div0 = element("div");
      h3 = element("h3");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t2 = space();
      add_location(h3, file, 162, 20, 4750);
      attr_dev(div0, "class", "row group-header s-fYuJJuH3TGkt");
      add_location(div0, file, 161, 16, 4699);
      attr_dev(div1, "class", "group s-fYuJJuH3TGkt");
      set_style(
        div1,
        "width",
        /*timelineWidth*/
        ctx[4] + "px"
      );
      add_location(div1, file, 164, 16, 4811);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div0, anchor);
      append_dev(div0, h3);
      append_dev(h3, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, div1, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div1, null);
        }
      }
      append_dev(div1, t2);
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*groups*/
      1 && t0_value !== (t0_value = /*group*/
      ctx2[25].name + ""))
        set_data_dev(t0, t0_value);
      if (dirty[0] & /*onClick, groups, onContextMenu*/
      385) {
        each_value_1 = /*group*/
        ctx2[25].entities;
        validate_each_argument(each_value_1);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div1, t2);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
      if (dirty[0] & /*timelineWidth*/
      16) {
        set_style(
          div1,
          "width",
          /*timelineWidth*/
          ctx2[4] + "px"
        );
      }
    },
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div0);
      if (detaching)
        detach_dev(t1);
      if (detaching)
        detach_dev(div1);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_each_block.name,
    type: "each",
    source: "(161:12) {#each groups as group}",
    ctx
  });
  return block;
}
function create_fragment$1(ctx) {
  let div8;
  let div7;
  let div2;
  let div0;
  let t0;
  let div1;
  let t1;
  let t2;
  let div6;
  let div4;
  let div3;
  let t3;
  let div5;
  let t4;
  let mounted;
  let dispose;
  let each_value_4 = (
    /*groups*/
    ctx[0]
  );
  validate_each_argument(each_value_4);
  let each_blocks_2 = [];
  for (let i = 0; i < each_value_4.length; i += 1) {
    each_blocks_2[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
  }
  let each_value_3 = (
    /*hours*/
    ctx[1]
  );
  validate_each_argument(each_value_3);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks_1[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }
  let each_value = (
    /*groups*/
    ctx[0]
  );
  validate_each_argument(each_value);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const block = {
    c: function create() {
      div8 = element("div");
      div7 = element("div");
      div2 = element("div");
      div0 = element("div");
      t0 = space();
      div1 = element("div");
      t1 = space();
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }
      t2 = space();
      div6 = element("div");
      div4 = element("div");
      div3 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t3 = space();
      div5 = element("div");
      t4 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr_dev(div0, "class", "header s-fYuJJuH3TGkt");
      add_location(div0, file, 133, 12, 3693);
      attr_dev(div1, "class", "header-padding s-fYuJJuH3TGkt");
      add_location(div1, file, 135, 12, 3745);
      attr_dev(div2, "class", "label-container s-fYuJJuH3TGkt");
      add_location(div2, file, 132, 8, 3617);
      attr_dev(div3, "class", "timeline-header s-fYuJJuH3TGkt");
      add_location(div3, file, 150, 16, 4280);
      attr_dev(div4, "class", "header s-fYuJJuH3TGkt");
      set_style(
        div4,
        "width",
        /*timelineWidth*/
        ctx[4] + "px"
      );
      add_location(div4, file, 148, 12, 4163);
      attr_dev(div5, "class", "header-padding s-fYuJJuH3TGkt");
      add_location(div5, file, 158, 12, 4599);
      attr_dev(div6, "class", "timeline-container s-fYuJJuH3TGkt");
      add_location(div6, file, 147, 8, 4118);
      attr_dev(div7, "class", "timetable-container s-fYuJJuH3TGkt");
      add_location(div7, file, 131, 4, 3575);
      attr_dev(div8, "class", "timetable s-fYuJJuH3TGkt");
      add_location(div8, file, 130, 0, 3518);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      insert_dev(target, div8, anchor);
      append_dev(div8, div7);
      append_dev(div7, div2);
      append_dev(div2, div0);
      append_dev(div2, t0);
      append_dev(div2, div1);
      append_dev(div2, t1);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        if (each_blocks_2[i]) {
          each_blocks_2[i].m(div2, null);
        }
      }
      ctx[13](div2);
      append_dev(div7, t2);
      append_dev(div7, div6);
      append_dev(div6, div4);
      append_dev(div4, div3);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        if (each_blocks_1[i]) {
          each_blocks_1[i].m(div3, null);
        }
      }
      append_dev(div6, t3);
      append_dev(div6, div5);
      append_dev(div6, t4);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div6, null);
        }
      }
      ctx[19](div8);
      if (!mounted) {
        dispose = listen_dev(
          div4,
          "scroll",
          /*scroll_handler*/
          ctx[14],
          false,
          false,
          false,
          false
        );
        mounted = true;
      }
    },
    p: function update(ctx2, dirty) {
      if (dirty[0] & /*groups*/
      1) {
        each_value_4 = /*groups*/
        ctx2[0];
        validate_each_argument(each_value_4);
        let i;
        for (i = 0; i < each_value_4.length; i += 1) {
          const child_ctx = get_each_context_4(ctx2, each_value_4, i);
          if (each_blocks_2[i]) {
            each_blocks_2[i].p(child_ctx, dirty);
          } else {
            each_blocks_2[i] = create_each_block_4(child_ctx);
            each_blocks_2[i].c();
            each_blocks_2[i].m(div2, null);
          }
        }
        for (; i < each_blocks_2.length; i += 1) {
          each_blocks_2[i].d(1);
        }
        each_blocks_2.length = each_value_4.length;
      }
      if (dirty[0] & /*hours, formatHour*/
      34) {
        each_value_3 = /*hours*/
        ctx2[1];
        validate_each_argument(each_value_3);
        let i;
        for (i = 0; i < each_value_3.length; i += 1) {
          const child_ctx = get_each_context_3(ctx2, each_value_3, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
          } else {
            each_blocks_1[i] = create_each_block_3(child_ctx);
            each_blocks_1[i].c();
            each_blocks_1[i].m(div3, null);
          }
        }
        for (; i < each_blocks_1.length; i += 1) {
          each_blocks_1[i].d(1);
        }
        each_blocks_1.length = each_value_3.length;
      }
      if (dirty[0] & /*timelineWidth*/
      16) {
        set_style(
          div4,
          "width",
          /*timelineWidth*/
          ctx2[4] + "px"
        );
      }
      if (dirty[0] & /*timelineWidth, groups, onClick, onContextMenu*/
      401) {
        each_value = /*groups*/
        ctx2[0];
        validate_each_argument(each_value);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div6, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching)
        detach_dev(div8);
      destroy_each(each_blocks_2, detaching);
      ctx[13](null);
      destroy_each(each_blocks_1, detaching);
      destroy_each(each_blocks, detaching);
      ctx[19](null);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function getPopupText(entry) {
  return `${entry.getStartTime().toString()} - ${entry.getEndTime().toString()} ${entry.text}`;
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Timetable", slots, []);
  let { startHour = 0 } = $$props;
  let { endHour = 0 } = $$props;
  let { groups = [] } = $$props;
  const dispatch = createEventDispatcher();
  let containerElement;
  let labelContainerElement;
  let hours = [];
  let containerWidth = null;
  let labelWidth = null;
  let timelineWidth = null;
  let containerResizeObserver;
  let labelResizeObserver;
  onMount(() => {
    containerResizeObserver = new ResizeObserver((entries, observer) => {
      onContainerResize(new CustomEvent("resize", { detail: containerElement }));
    });
    containerResizeObserver.observe(containerElement);
    labelResizeObserver = new ResizeObserver((entries, observer) => {
      onLabelResize(new CustomEvent("resize", { detail: labelContainerElement }));
    });
    labelResizeObserver.observe(labelContainerElement);
  });
  onDestroy(() => {
    if (containerResizeObserver) {
      containerResizeObserver.disconnect();
    }
    if (labelResizeObserver) {
      labelResizeObserver.disconnect();
    }
  });
  function formatHour(hour) {
    return format((/* @__PURE__ */ new Date()).setHours(hour, 0, 0, 0), "HHmm");
  }
  function onScroll(e) {
    if (!containerElement) {
      return;
    }
    const els = containerElement.getElementsByClassName("group");
    for (let i = 0; i < els.length; i++) {
      const groupEl = els[i];
      const target = e.target;
      if (target instanceof HTMLDivElement) {
        groupEl.scrollLeft = target.scrollLeft;
      }
    }
  }
  function onContainerResize(e) {
    const detail = e.detail;
    if (detail instanceof HTMLDivElement) {
      $$invalidate(11, containerWidth = detail.clientWidth);
    }
  }
  function onLabelResize(e) {
    const detail = e.detail;
    if (detail instanceof HTMLDivElement) {
      $$invalidate(12, labelWidth = detail.clientWidth);
    }
  }
  function onClick(e, group, entity, entry) {
    e.preventDefault();
    e.cancelBubble = true;
    if (entry !== null) {
      const detail = { rightClick: false, group, entity, entry };
      dispatch("entryClicked", detail);
    } else {
      const detail = { rightClick: false, group, entity };
      dispatch("entityClicked", detail);
    }
  }
  function onContextMenu(e, group, entity, entry) {
    e.preventDefault();
    e.cancelBubble = true;
    if (entry !== null) {
      const detail = { rightClick: true, group, entity, entry };
      dispatch("entryClicked", detail);
    } else {
      const detail = { rightClick: true, group, entity };
      dispatch("entityClicked", detail);
    }
  }
  const writable_props = ["startHour", "endHour", "groups"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console.warn(`<Timetable> was created with unknown prop '${key}'`);
  });
  function div2_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      labelContainerElement = $$value;
      $$invalidate(3, labelContainerElement);
    });
  }
  const scroll_handler = (e) => onScroll(e);
  const click_handler = (group, entity, entry, e) => onClick(e, group, entity, entry);
  const contextmenu_handler = (group, entity, entry, e) => onContextMenu(e, group, entity, entry);
  const click_handler_1 = (group, entity, e) => onClick(e, group, entity, null);
  const contextmenu_handler_1 = (group, entity, e) => onContextMenu(e, group, entity, null);
  function div8_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      containerElement = $$value;
      $$invalidate(2, containerElement);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("startHour" in $$props2)
      $$invalidate(9, startHour = $$props2.startHour);
    if ("endHour" in $$props2)
      $$invalidate(10, endHour = $$props2.endHour);
    if ("groups" in $$props2)
      $$invalidate(0, groups = $$props2.groups);
  };
  $$self.$capture_state = () => ({
    createEventDispatcher,
    onDestroy,
    onMount,
    format,
    startHour,
    endHour,
    groups,
    dispatch,
    containerElement,
    labelContainerElement,
    hours,
    containerWidth,
    labelWidth,
    timelineWidth,
    containerResizeObserver,
    labelResizeObserver,
    formatHour,
    onScroll,
    onContainerResize,
    onLabelResize,
    onClick,
    onContextMenu,
    getPopupText
  });
  $$self.$inject_state = ($$props2) => {
    if ("startHour" in $$props2)
      $$invalidate(9, startHour = $$props2.startHour);
    if ("endHour" in $$props2)
      $$invalidate(10, endHour = $$props2.endHour);
    if ("groups" in $$props2)
      $$invalidate(0, groups = $$props2.groups);
    if ("containerElement" in $$props2)
      $$invalidate(2, containerElement = $$props2.containerElement);
    if ("labelContainerElement" in $$props2)
      $$invalidate(3, labelContainerElement = $$props2.labelContainerElement);
    if ("hours" in $$props2)
      $$invalidate(1, hours = $$props2.hours);
    if ("containerWidth" in $$props2)
      $$invalidate(11, containerWidth = $$props2.containerWidth);
    if ("labelWidth" in $$props2)
      $$invalidate(12, labelWidth = $$props2.labelWidth);
    if ("timelineWidth" in $$props2)
      $$invalidate(4, timelineWidth = $$props2.timelineWidth);
    if ("containerResizeObserver" in $$props2)
      containerResizeObserver = $$props2.containerResizeObserver;
    if ("labelResizeObserver" in $$props2)
      labelResizeObserver = $$props2.labelResizeObserver;
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*startHour, endHour, hours*/
    1538) {
      {
        if (isNaN(startHour) || startHour < 0 || startHour > 23) {
          $$invalidate(9, startHour = 0);
        }
        if (isNaN(endHour) || endHour < 0 || endHour > 23) {
          $$invalidate(10, endHour = 0);
        }
        $$invalidate(1, hours = []);
        let hour = startHour;
        do {
          hours.push(hour);
          hour = (hour + 1) % 24;
        } while (hour !== endHour && hours.length < 24);
      }
    }
    if ($$self.$$.dirty[0] & /*containerWidth, labelWidth*/
    6144) {
      {
        if (containerWidth !== null && labelWidth !== null) {
          $$invalidate(4, timelineWidth = containerWidth - labelWidth);
        }
      }
    }
  };
  return [
    groups,
    hours,
    containerElement,
    labelContainerElement,
    timelineWidth,
    formatHour,
    onScroll,
    onClick,
    onContextMenu,
    startHour,
    endHour,
    containerWidth,
    labelWidth,
    div2_binding,
    scroll_handler,
    click_handler,
    contextmenu_handler,
    click_handler_1,
    contextmenu_handler_1,
    div8_binding
  ];
}
class Timetable extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { startHour: 9, endHour: 10, groups: 0 }, null, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Timetable",
      options,
      id: create_fragment$1.name
    });
  }
  get startHour() {
    throw new Error("<Timetable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set startHour(value) {
    throw new Error("<Timetable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get endHour() {
    throw new Error("<Timetable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set endHour(value) {
    throw new Error("<Timetable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  get groups() {
    throw new Error("<Timetable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set groups(value) {
    throw new Error("<Timetable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
class Time {
  constructor(hour, minute) {
    if (!Number.isInteger(hour)) {
      throw new TypeError("hour must be an integer");
    }
    if (!Number.isInteger(minute)) {
      throw new TypeError("minute must be an integer");
    }
    this._hour = hour;
    this._minute = minute;
  }
  hours() {
    return this._hour;
  }
  minutes() {
    return this._minute;
  }
  addDuration(d) {
    let hour = this._hour;
    let minute = this._minute;
    if (d.minutes) {
      minute += d.minutes;
    }
    hour += Math.floor(minute / 60);
    minute = minute % 60;
    if (d.hours) {
      hour += d.hours;
    }
    hour = hour % 24;
    return new Time(hour, minute);
  }
  toString() {
    const d = /* @__PURE__ */ new Date();
    d.setHours(this._hour, this._minute, 0, 0);
    return format(d, "HH:mm");
  }
  static fromString(s) {
    const d = parse(s, "HH:mm", /* @__PURE__ */ new Date());
    return new Time(d.getHours(), d.getMinutes());
  }
}
class Group {
  constructor(name) {
    this.name = name;
    this.entities = [];
  }
  getEntity(name) {
    for (let i = 0; i < this.entities.length; i++) {
      const entity = this.entities[i];
      if (entity.name === name) {
        return entity;
      }
    }
    return null;
  }
  addEntity(entity) {
    this.entities.push(entity);
    return this;
  }
}
class Entity {
  constructor(name) {
    this.name = name;
    this.entries = [];
  }
  addEntry(entry) {
    this.entries.push(entry);
    return this;
  }
}
class Entry {
  constructor(startTime, durationSpec, text2) {
    this._startTime = Time.fromString(startTime);
    this._duration = dist.parse(durationSpec);
    this.startTime = startTime;
    this.duration = durationSpec;
    this.text = text2;
    this._endTime = this._startTime.addDuration(this._duration);
  }
  getStartTime() {
    return this._startTime;
  }
  getEndTime() {
    return this._endTime;
  }
  getDuration() {
    return this._duration;
  }
  getLeft() {
    return `${(this._startTime.hours() + this._startTime.minutes() / 60) * 100 / 24}%`;
  }
  getWidth() {
    let hours = 0;
    if (this._duration.hours) {
      hours += this._duration.hours;
    }
    if (this._duration.minutes) {
      hours += this._duration.minutes / 60;
    }
    if (this._duration.seconds) {
      hours += this._duration.seconds / (60 * 60);
    }
    return `${hours * 100 / 24}%`;
  }
}
const { console: console_1 } = globals;
function create_default_slot(ctx) {
  let timetable;
  let current;
  timetable = new Timetable({
    props: { groups: (
      /*groups*/
      ctx[1]
    ) },
    $$inline: true
  });
  timetable.$on(
    "entryClicked",
    /*entryClicked_handler*/
    ctx[2]
  );
  timetable.$on(
    "entityClicked",
    /*entityClicked_handler*/
    ctx[3]
  );
  const block = {
    c: function create() {
      create_component(timetable.$$.fragment);
    },
    m: function mount(target, anchor) {
      mount_component(timetable, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current)
        return;
      transition_in(timetable.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(timetable.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(timetable, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_default_slot.name,
    type: "slot",
    source: '(23:0) <Hst.Story group=\\"usage\\">',
    ctx
  });
  return block;
}
function create_fragment(ctx) {
  let hst_story;
  let current;
  hst_story = new /*Hst*/
  ctx[0].Story({
    props: {
      group: "usage",
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    },
    $$inline: true
  });
  const block = {
    c: function create() {
      create_component(hst_story.$$.fragment);
    },
    l: function claim(nodes) {
      throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    },
    m: function mount(target, anchor) {
      mount_component(hst_story, target, anchor);
      current = true;
    },
    p: function update(ctx2, [dirty]) {
      const hst_story_changes = {};
      if (dirty & /*$$scope*/
      16) {
        hst_story_changes.$$scope = { dirty, ctx: ctx2 };
      }
      hst_story.$set(hst_story_changes);
    },
    i: function intro(local) {
      if (current)
        return;
      transition_in(hst_story.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hst_story.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(hst_story, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx
  });
  return block;
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  validate_slots("Timetable_story", slots, []);
  let { Hst } = $$props;
  const groups = [];
  groups.push(new Group("group1").addEntity(new Entity("entity1_1").addEntry(new Entry("05:00", "PT1H", "test1 this includes some pretty long detail"))).addEntity(new Entity("entity1_2").addEntry(new Entry("07:30", "PT3H20M", "test2.1")).addEntry(new Entry("12:00", "PT2H15M", "test2.2")).addEntry(new Entry("16:45", "PT2H", "test2.3"))).addEntity(new Entity("entity1_3")));
  groups.push(new Group("group2").addEntity(new Entity("entity2_1")).addEntity(new Entity("entity2_2")).addEntity(new Entity("entity2_3")));
  groups.push(new Group("group3").addEntity(new Entity("entity3_1")).addEntity(new Entity("entity3_2")).addEntity(new Entity("entity3_3")));
  $$self.$$.on_mount.push(function() {
    if (Hst === void 0 && !("Hst" in $$props || $$self.$$.bound[$$self.$$.props["Hst"]])) {
      console_1.warn("<Timetable_story> was created without expected prop 'Hst'");
    }
  });
  const writable_props = ["Hst"];
  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot")
      console_1.warn(`<Timetable_story> was created with unknown prop '${key}'`);
  });
  const entryClicked_handler = (e) => console.log("entryClicked", e);
  const entityClicked_handler = (e) => console.log("entityClicked", e);
  $$self.$$set = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  $$self.$capture_state = () => ({
    Timetable,
    Entity,
    Entry,
    Group,
    Hst,
    groups
  });
  $$self.$inject_state = ($$props2) => {
    if ("Hst" in $$props2)
      $$invalidate(0, Hst = $$props2.Hst);
  };
  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }
  return [Hst, groups, entryClicked_handler, entityClicked_handler];
}
class Timetable_story extends SvelteComponentDev {
  constructor(options) {
    super(options);
    init(this, options, instance, create_fragment, safe_not_equal, { Hst: 0 });
    dispatch_dev("SvelteRegisterComponent", {
      component: this,
      tagName: "Timetable_story",
      options,
      id: create_fragment.name
    });
  }
  get Hst() {
    throw new Error("<Timetable_story>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
  set Hst(value) {
    throw new Error("<Timetable_story>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
  }
}
const Comp1 = { "title": "Introduction", "icon": "carbon:bookmark", "group": "top", "docsOnly": true, "variants": [] };
let files = [
  { "id": "src-stories-timetable-story-svelte", "path": ["Timetable"], "filePath": "src/stories/Timetable.story.svelte", "story": { "id": "src-stories-timetable-story-svelte", "title": "Timetable", "group": "usage", "layout": { "type": "single", "iframe": true }, "icon": null, "iconColor": null, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "svelte3", "index": 0, component: Timetable_story, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-timetable-story-svelte-bed73b77.js"), true ? [] : void 0) },
  { "id": "src-stories-introduction-story-js", "path": ["Introduction"], "filePath": "src/stories/Introduction.story.js", "story": { "id": "src-stories-introduction-story-js", "title": "Introduction", "group": "top", "layout": { "type": "single", "iframe": true }, "icon": "carbon:bookmark", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/stories/Introduction.story.md", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-stories-introduction-story-js-310c24de.js"), true ? [] : void 0) }
];
let tree = [{ "group": true, "id": "top", "title": "", "children": [{ "title": "Introduction", "index": 1 }] }, { "group": true, "id": "usage", "title": "", "children": [{ "title": "Timetable", "index": 0 }] }];
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/home/nick/Code/ngyewch/svelte-timetable/node_modules/.pnpm/histoire@0.16.1_sass@1.62.1_vite@4.3.9/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-svelte", "supportPlugin": { "id": "svelte3", "moduleName": "@histoire/plugin-svelte", "setupFn": "setupSvelte3" }, "commands": [{ "id": "histoire:plugin-svelte:generate-story", "label": "Generate Svelte 3 story from component", "icon": "https://svelte.dev/favicon.png", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-svelte/dist/commands/generate-story.client.js" }] }], "outDir": "/home/nick/Code/ngyewch/svelte-timetable/build/histoire", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "svelte", "patterns": ["**/*.svelte"], "pluginIds": ["svelte3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "top", "title": "" }, { "id": "usage", "title": "" }] }, "theme": { "title": "svelte-timetable", "colors": { "primary": { "50": "#fff7ed", "100": "#ffedd5", "200": "#fed7aa", "300": "#fdba74", "400": "#fb923c", "500": "#f97316", "600": "#ea580c", "700": "#c2410c", "800": "#9a3412", "900": "#7c2d12" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark", "logo": { "square": "@histoire/plugin-svelte/assets/histoire-svelte.svg", "light": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg", "dark": "@histoire/plugin-svelte/assets/histoire-svelte-text.svg" } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "hash", "build": { "excludeFromVendorsChunk": [] }, "vite": { "base": "/svelte-timetable/", "resolve": { "alias": { "@arl/svelte-timetable": "/src" }, "mainFields": ["svelte", "svelte", "module", "jsnext:main", "jsnext"] } }, "viteIgnorePlugins": ["vite-plugin-sveltekit-compile"], "setupFile": "src/stories/setup.ts" };
const logos = { square: Logo_square, light: Logo_dark, dark: Logo_dark };
const histoireConfig = config;
const customLogos = logos;
const base = "/svelte-timetable/";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-50060364.js"), true ? ["assets/HomeView.vue-50060364.js","assets/vendor-9deb532e.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-ffa32480.js"), true ? ["assets/StoryView.vue-ffa32480.js","assets/vendor-9deb532e.js","assets/MobileOverlay.vue2-47737fb8.js","assets/BaseEmpty.vue-39cf1388.js","assets/state-b9ff67b2.js"] : void 0)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file2, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file2) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file2.story,
          file: markRaw(result),
          variants: file2.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key !== "component") {
        result[key] = file2[key];
      }
    }
  } else {
    result = {
      ...file2,
      component: markRaw(file2.component),
      story: {
        ...file2.story,
        title: file2.story.title,
        file: markRaw(file2),
        variants: file2.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-9deb532e.js").then((n) => n.b0), true ? [] : void 0),
  "svelte3": () => __vitePreload(() => import("./vendor-9deb532e.js").then((n) => n.b1), true ? [] : void 0)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: null
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: __props.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  base as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};
